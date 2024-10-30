import itemModel from '../models/itemModel.js'


export const createItem = async (req, res) => {
  try {
    const { itemName, inventoryLocation, brand, category, supplier, stockUnit, unitPrice, status } = req.body;

    const item = new itemModel({
      itemNo: Date.now(),
      itemName,
      inventoryLocation,
      brand,
      category,
      supplier,
      stockUnit,
      unitPrice,
      status
    });

    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all items
export const getAllItems = async (req, res) => {
  try {
    const items = await itemModel.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an item
export const updateItem = async (req, res) => {
  try {
    const{id} = req.params
    const { itemName, inventoryLocation, brand, category, supplier, stockUnit, unitPrice, status } = req.body;

    const updatedItem = await itemModel.findOneAndUpdate({_id:id , isDeleted:false}, {
      itemName,
      inventoryLocation,
      brand,
      category,
      supplier,
      stockUnit,
      unitPrice,
      status
    }, { new: true });

    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an item
export const deleteItem = async (req, res) => {
  try {
    const id = req.params.id
    const data = {isDeleted:true}
    await itemModel.findOneAndUpdate({_id:id, isDeleted:false},data,{new:true});
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


