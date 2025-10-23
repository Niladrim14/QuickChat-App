import mongoose from "mongoose";

 // Structure of User model


const userSchema = new mongoose.Schema({
  email :{
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },

  password: {
    type: String,
    required: true,
    minlength: 6
  },

  fullName: {
    type: String,
    required: true
  },
  profilePic: {
    type: String,
    default: ""
  }
       
},{timestamps:true});

const User = mongoose.model("User", userSchema);
export default User;
