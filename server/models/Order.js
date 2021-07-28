const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  name: String,
  phone: String,
  email: String,
  date: Date,
  time: String,
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
