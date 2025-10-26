
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import {ENV} from '../lib/env.js'


export const protectRoute = async (req, res, next) => {
 try {
    //get token from cookies
    const token = req.cookies.jwt;
    if(!token){
      return res.status(401).json({message:"Not authorized, no token"})
    }
    
    //verify token
    const decoded = jwt.verify(token, ENV.JWT_SECRET);
   if(!decoded) return res.status(401).json({message:"Not authorized, token failed"});


//get user from token
   const user = await User.findById (decoded.userId).select('-password');
    if(!user) return res.status(401).json({message:"Not authorized, user not found"});
    
    //set user to request for next function
    req.user = user;
    next();

 } catch (error) {
    console.log("Error in Middleware",error);
    res.status(500).json({message:"Internal Server Error"});
 }


};



