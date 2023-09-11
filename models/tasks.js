// models.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
  product:{type:mongoose.Schema.Types.ObjectId, ref:'Product'}
});

module.exports = mongoose.model('Task', taskSchema);
