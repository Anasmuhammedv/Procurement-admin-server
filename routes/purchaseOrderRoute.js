
import express from 'express'
import { createPurchaseOrder, exportPurchaseOrder, getPurchaseOrders } from '../controllers/purchaseOrderController.js';
const router =express.Router()

router.post('/purchaseOrder', createPurchaseOrder);
router.get('/purchaseOrder', getPurchaseOrders);
router.get('/purchaseOrder/:id', exportPurchaseOrder);

export default router