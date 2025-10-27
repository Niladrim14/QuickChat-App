import Message from "../models/Message.js";
import User from "../models/User.js";
import claudinary from "../lib/cloudinary.js";

// Get Contacts without  own id and password
export const getAllContacts = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select(" -password " );
        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error in getAllContacts",error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Get Messages by User ID
export const getMessageByUserId = async (req, res) => {
    try {
        const myId = req.user._id;
        const { id: userToChatId } = req.params;
        const messages = await Message.find({
        
            $or: [
                { senderId: myId, receiverId: userToChatId },
                { senderId: userToChatId, receiverId: myId },
            ],
        });

        res.status(200).json(messages);
        
    } catch (error) {
        console.log("Error in getMessageByUserId", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const sendMessage = async (req, res) => {
    try {
        const myId = req.user._id;
        const { id: userToChatId } = req.params;
        const { text, image } = req.body;

      if (!text && !image) {
            return res.status(400).json({ message: "Message content is required" });
        }   
        if (userToChatId.toString() === myId.toString()) {
            return res.status(400).json({ message: "Cannot send message to yourself" });
        }
        


        let imageUrl;
        // Upload image to Cloudinary if exists
        if (image) {
            const uploadResponse = await claudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }
// Create new message
        const newMessage = await Message.create({
            senderId: myId,
            receiverId: userToChatId,
            text,
            image: imageUrl,
        });

        await newMessage.save();

//todo: emit socket event for real-time message delivery

        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getChatPartners = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        // Find all messages involving the logged-in user
        const messages = await Message.find({
            $or: [
                { senderId: loggedInUserId },
                { receiverId: loggedInUserId },
            ],
        });
        // Extract unique chat partner IDs
        const chatPartnerIds = [...new Set(
            messages.map((msg) =>
                msg.senderId.toString() === loggedInUserId.toString()
                    ? msg.receiverId.toString()
                    : msg.senderId.toString()
            )
        )
    ];
        // Fetch user details of chat partners excluding passwords

        const chatPartners = await User.find({ _id: { $in: chatPartnerIds } }).select("-password");

        res.status(200).json(chatPartners);

    } catch (error) {
        console.log("Error in getChatPartners", error);
        res.status(500).json({ message: "Internal server error" });
    }
}; 