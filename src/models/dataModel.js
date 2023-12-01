const mongoose = require('../db/mongoose');

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;