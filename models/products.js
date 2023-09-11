const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productNumber: { type: Number, required: true },
    productName: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { type: String, required: true },
    percentComplete: { type: Number, required: true },
  });
  
module.exports = mongoose.model('Product', productSchema);