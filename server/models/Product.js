const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
  },
  tourPackage: {
    type: Schema.Types.ObjectId,
    ref: 'TourPackage',
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
