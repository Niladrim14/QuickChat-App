// for user signup, login, logout, update profile
import { sendWelcomeEmail } from '../emails/emailHandler.js';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { generateToken } from '../lib/utils.js';
 import dotenv from 'dotenv';
dotenv.config();
import cloudinary from '../lib/cloudinary.js';
import { ENV } from '../lib/env.js';

// User Signup with Validation and Welcome Email
export const signup = async (req, res) => {
 const {fullName, email, password} = req.body

 try {
    if(!fullName || !email || !password){
      return res.status(400).json({message:"All fields are required"})
    }
    if (password.length < 6){
      return res.status(400).json({message:"Password must be at least 6 characters"})
    }

    //check if email is valid  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    //check if user already exists
    const user = await User.findOne({email});
    if(user){
      return res.status(409).json({message:" Email already exists"})
    }

     //Create new user and pass hashed password

     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(password,salt)
     
     const newUser = new User ({
        fullName,
        email,
        password: hashedPassword
     })

     // token generate and id generate
     if (newUser) {
         const savedUser = await newUser.save();
           generateToken(savedUser._id, res);

           res.status(201).json({
            _id: savedUser._id,
            fullName: savedUser.fullName,
            email: savedUser.email,
            profilePic: savedUser.profilePic,
           });
//send welcome email
           try {
               await sendWelcomeEmail(savedUser.email, savedUser.fullName, process.env.CLIENT_URL);
           } catch (error) {
               console.error("Error sending welcome email:", error);
               res.status(500).json({ message: "User created, but failed to send welcome email." });
           }


     }else {
        res.status(400).json ({message:"Invalid user data"})
     }


 } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({message:"Server error"});
 }
    
}; 

// User Login with Token Generation
export const login = async (req, res) => {
   
   try {
       const { email, password } = req.body;

       if (!email || !password) {
           return res.status(400).json({ message: "All fields are required" });
       }

       // Check if user exists
       const user = await User.findOne({ email });
       if (!user) {
           return res.status(404).json({ message: "Invalid credentials" });
       }

       // Check password
       const isMatch = await bcrypt.compare(password, user.password);
       if (!isMatch) {
           return res.status(401).json({ message: "Invalid credentials" });
       }

       // Generate token
       generateToken(user._id, res);

       res.status(200).json({
           _id: user._id,
           fullName: user.fullName,
           email: user.email,
           profilePic: user.profilePic,
       });
   } catch (error) {
       console.error("Login error:", error);
       res.status(500).json({ message: "Server error" });
   }


}; 

// User Logout with Cookie Clearance
export const logout =  (_, res) => {
   res.cookie('jwt','',{maxAge:0})
   res.status(200).json({messege:"Logged out sucessfully"});
  
};


// Update User Profile with Cloudinary
export const updateProfile = async (req, res) => {
    try {
      const {profilePic} = req.body ;
      if(!profilePic) return req.status(400).json({message: "Profile pic is required "})
   // Get user ID from authenticated request from middleware next function 
        const userId = req.user._id;


// Upload new profile picture to Cloudinary
        const uploadResponse = await cloudinary.uploader.upload(profilePic);


        // Update user's profile picture URL in the database 
       const updatedUser = await User.findByIdAndUpdate(userId, {profilePic: uploadResponse.secure_url}, {new:true});

        res.status(200).json(updatedUser);
        
    } catch (error) {
      console.error("Profile update error:", error);
      res.status(500).json({message: "Server error"});  
    }
}