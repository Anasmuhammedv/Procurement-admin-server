
import Supplier from "../models/supplierModel.js";

export const addSupplier = async (req, res) => {
    try {
        const newSupplier = await Supplier.create(req.body);
        res.status(201).json(newSupplier);
    } catch (error) {
        res.status(400).json({ message: "Failed to add supplier", error });
    }
};

export const getSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find({ status: "Active",isDeleted:false });
        res.json(suppliers);
    } catch (error) {
        res.status(400).json({ message: "Failed to fetch suppliers", error });
    }
};

export const getASupplier = async(req,res)=>{
    try {
        const {id}=req.params
        const supplier = await Supplier.findOne({_id:id , isDeleted:false})
        res.json(supplier)
    } catch (error) {
        res.status(400).json({ message: "Failed to fetch suppliers", error });
    }
}

export const editSuppliers = async(req,res)=>{
    try {
        const {id} = req.params
        const data = req.body
        const editedSupplier = await Supplier.findOneAndUpdate({_id:id , isDeleted:false},data,{new:true})
        res.json(editedSupplier)
    } catch (error) {
        res.status(400).json({ message: "Failed to edit suppliers", error });
    }
}

export const deleteSupplier = async(req,res)=>{
    try {
        const { id} =req.params
        const data = {isDeleted:true}
        const deletedSupplier = await Supplier.findOneAndUpdate({_id:id , isDeleted:false},data,{new:true})
        res.json(deletedSupplier)
    } catch (error) {
        res.status(400).json({ message: "Failed to edit suppliers", error });
    }
    
}

