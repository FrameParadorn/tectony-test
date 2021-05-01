const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    name: String,
    price: String,
    stock: Number,
    rate: Number,
  },
);

module.exports = mongoose.model('product', schema);
