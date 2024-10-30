// server/models/Item.js
import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  itemNo: { 
    type: Number, 
    unique: true, 
    required: true },

  itemName: { 
    type: String, 
    required: true },

  inventoryLocation: { 
    type: String, 
    required: true },

  brand: { 
    type: String, 
    required: true },

  category: { 
    type: String, 
    required: true },

  supplier: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Supplier' },

  stockUnit: { 
    type: String, 
    required: true },

  unitPrice: { 
    type: Number, 
    required: true },

  itemImages: [{ type: String }], 

  status: { 
    type: String, 
    default: 'Enabled', 
    enum: ['Enabled', 'Disabled'] }
}, { timestamps: true });

const itemModel = mongoose.model('Item', itemSchema);
export default itemModel
