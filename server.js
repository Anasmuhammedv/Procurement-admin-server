import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import adminRouter from './routes/adminAuthRoute.js'
import supplierRoute from './routes/supplierRoute.js'
import itemRouter from './routes/itemRoute.js'
import purchaseRouter from './routes/purchaseOrderRoute.js'
const app = express()

import dotenv from 'dotenv'
dotenv.config()

app.use(cors({
    origin:"procuremrnt-admin-client.vercel.app"
}));
app.use(express.json());

app.use('/api',adminRouter)
app.use('/api',supplierRoute)
app.use('/api',itemRouter)
app.use('/api',purchaseRouter)


mongoose.connect(process.env.MONGODB_URI)
    .then(() => app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT} database connected`)))
    .catch(err => console.log(err));
