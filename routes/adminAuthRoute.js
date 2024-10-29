import express from 'express'
import {adminLogin, createAdmin} from '../controllers/adminAuthController.js';
const router = express.Router();

// Admin login route
router.post('/login', adminLogin);
router.post('/create',createAdmin)

export default router