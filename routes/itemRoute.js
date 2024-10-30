import express from 'express'
import { createItem, deleteItem, getAllItems, updateItem } from '../controllers/itemController.js';

const router = express.Router();

// Create a new item
router.post('/item', createItem);

// Get all items
router.get('/items', getAllItems);

// Update an item
router.put('/item/:id', updateItem);

// Delete an item
router.delete('/item/:id', deleteItem);

export default router
