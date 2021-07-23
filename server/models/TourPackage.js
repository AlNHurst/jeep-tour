const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const tourSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  name: String,
  description: String,
  adultPrice: Number,
  childPrice: Number,
  duration: Number,
  departureTimes: String,
});

const TourPackage = model("TourPackage", tourSchema);

module.exports = TourPackage;
