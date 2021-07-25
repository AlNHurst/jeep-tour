const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const reviewSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  tour_id: {
    type: Schema.Types.ObjectId,
    ref: 'TourPackage'
  },
  comment: {
    type: String,
    required: true,
  },
  rating: Number

});

const Review = model("Review", reviewSchema);

module.exports = Review;