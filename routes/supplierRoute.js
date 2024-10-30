// routes/supplierRoutes.js
import express from 'express';
import { addSupplier, deleteSupplier, editSuppliers, getASupplier, getSuppliers } from '../controllers/supplierController.js';

const router = express.Router();

// Route to add a new supplier
router.post('/supplier', addSupplier);

// Route to get all active suppliers
router.get('/supplier', getSuppliers);

//get a supplier
router.get('/supplier/:id', getASupplier);

//edit supplier
router.put('/supplier/:id',editSuppliers)

//delete supplier
router.patch('/supplier/:id',deleteSupplier)

export default router;
