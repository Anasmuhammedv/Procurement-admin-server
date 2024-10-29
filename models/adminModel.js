// models/Admin.js
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
 name:{
    type:String
 },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const adminLogin = mongoose.model('Admin', adminSchema);
export default adminLogin
