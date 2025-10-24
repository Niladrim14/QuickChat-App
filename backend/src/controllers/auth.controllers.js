//For user signup handling
import { sendWelcomeEmail } from '../emails/emailHandler.js';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { generateToken } from '../lib/utils.js';
 import dotenv from 'dotenv';
dotenv.config();


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