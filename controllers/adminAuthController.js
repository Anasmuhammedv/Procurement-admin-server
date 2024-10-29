import jwt from 'jsonwebtoken';
import adminModel from '../models/adminModel.js';

const JWT_SECRET = process.env.JWT_SECRET || "secret key"


//login admin 


export const adminLogin= async(req, res)=> {
  const { email, password } = req.body;

  try {
    const admin = await adminModel.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    if (password !== admin.password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: admin._id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', admin,token });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
}

//Create admin 


export const createAdmin=async(req, res)=> {
  const { email, password } = req.body;
  try {
    const admin = new adminModel({ email, password });
    await admin.save();
    res.status(201).json({ message: 'Admin created successfully', admin });
  } catch (error) {
    res.status(500).json({ error: 'Error creating admin' });
  }
}


