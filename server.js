import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import adminRouter from './routes/adminAuthRoute.js'
const app = express()

import dotenv from 'dotenv'
dotenv.config()

app.use(cors());
app.use(express.json());

app.use('/api',adminRouter)

mongoose.connect(process.env.MONGODB_URI)
    .then(() => app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT} database connected`)))
    .catch(err => console.log(err));
