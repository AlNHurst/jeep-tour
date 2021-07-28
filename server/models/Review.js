const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const reviewSchema = new Schema({
  
  name: String,
  comment: String,
  rating: String,
   
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
  
}

);

const Review = model("Review", reviewSchema);

module.exports = Review;