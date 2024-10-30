import mongoose from "mongoose";

const PurchaseOrderSchema = new mongoose.Schema({
  orderNo: { 
    type: String, 
  },
  orderDate: {
    type: Date, 
    default: Date.now 
  },
  supplier: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Supplier', 
  },
  itemList: [
    {
      item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
      orderQty: { type: Number, required: true },
      discount: { type: Number, default: 0 },
      itemAmount: { type: Number, required: true },
      netAmount: { type: Number, required: true }  
    }
  ],
  itemTotal: { type: Number, required: true },
  discountTotal: { type: Number, default: 0 },
  netAmount: { type: Number, required: true }
});

const purchaseOrderModel = mongoose.model('PurchaseOrder', PurchaseOrderSchema);
export default purchaseOrderModel;
