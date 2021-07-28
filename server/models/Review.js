const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const reviewSchema = new Schema({
  
  name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  rating: String,
   
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
  
}

);

const Review = model("Review", reviewSchema);

module.exports = Review;