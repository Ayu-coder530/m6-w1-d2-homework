const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  status: { type: String, required: true }
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;

