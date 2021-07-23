const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// author: { type: Schema.Types.ObjectId, ref: 'Person' },

const reviewSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
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