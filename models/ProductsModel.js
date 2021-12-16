const mongoose = require('mongoose');
const { Schema } = mongoose;

//AUTH SCHEMA

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['men','women','kids','accesories'],
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const ProductsModel = mongoose.model('ProductsModel', productSchema);
module.exports = ProductsModel;
