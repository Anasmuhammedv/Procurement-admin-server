import mongoose from 'mongoose';

const supplierSchema = new mongoose.Schema({
    name: {
         type: String, 
         required: true },
    address: { 
        type: String },
    taxNo: { 
        type: String },
    country: { 
        type: String },
    mobileNo: { 
        type: String, 
        required: true },
    email: { 
        type: String, 
        required: true },
    status: { 
        type: String, 
        enum: ["Active", "Inactive", "Blocked"],
        default: "Active" },
    isDeleted:{
        type:Boolean,
        default:false
    }
});

const Supplier = mongoose.model('Supplier', supplierSchema);

export default Supplier;
