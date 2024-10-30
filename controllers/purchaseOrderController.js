import purchaseOrderModel from '../models/purchaseOrderModel.js';
import ExcelJS from 'exceljs';


export const createPurchaseOrder = async (req, res) => {
    try {
        const purchaseOrderData = req.body; 
        const newPurchaseOrder = new purchaseOrderModel(purchaseOrderData);
        await newPurchaseOrder.save();
        res.status(201).json(newPurchaseOrder);
    } catch (error) {
        console.error('Error creating purchase order:', error);
        res.status(500).json({ message: 'Error creating purchase order' });
    }
};



export const getPurchaseOrders = async (req, res) => {
  try {

    const orders = await purchaseOrderModel.find().populate('supplier').populate('itemList.item');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving purchase orders' });
  }
};



export const exportPurchaseOrder = async (req, res) => {
    const id = req.params.id
  try {
    const purchaseOrder = await purchaseOrderModel.findOne({supplier:id}).populate('supplier').populate('itemList.item');

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Purchase Order');
    
    worksheet.columns = [
      { header: 'Item No', key: 'itemNo' },
      { header: 'Item Name', key: 'itemName' },
      { header: 'Order Qty', key: 'orderQty' },
      { header: 'Unit Price', key: 'unitPrice' },
      { header: 'Discount', key: 'discount' },
      { header: 'Net Amount', key: 'netAmount' },
    ];

    purchaseOrder.itemList.forEach((item) => {
      worksheet.addRow({
        itemNo: item.item.itemNo,
        itemName: item.item.itemName,
        orderQty: item.orderQty,
        unitPrice: item.item.unitPrice,
        discount: item.discount,
        netAmount: item.netAmount,
      });
    });


    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=purchase_order.xlsx');
    
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    res.status(500).json({ error: 'Error exporting purchase order' });
  }
};
