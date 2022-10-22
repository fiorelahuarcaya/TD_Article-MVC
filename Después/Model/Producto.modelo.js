const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  idProducto: {
    type: Number,
    required: true
  },
  idCategoria: {
    type: Number,
    required: true
  },
  nombreP: {
    type: String,
    required: true
  },
  cantidad: {
    type: Number,
    required: true
  },
  precioCosto: {
    type: Number,
    required: false
  },
  precioVentaR: {
    type: Number,
    required: true
  },
  codBarra: {
    type: String,
    required: false
  }
});

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;