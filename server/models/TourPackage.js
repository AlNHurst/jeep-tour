const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const tourSchema = new Schema({
  name: String,
  url: String,
  shortDescription: String,
  longDescription: String,
  destinations: [
    {
      type: String,
    },
  ],
  adultPrice: Number,
  childPrice: Number,
  duration: Number,
  departureTimes: [
    {
      type: String,
    },
  ],
  reviews: [
    {
      comment: {
        type: String,
        required: true,
      },
    }
  ]
});

const TourPackage = model("TourPackage", tourSchema);

module.exports = TourPackage;
