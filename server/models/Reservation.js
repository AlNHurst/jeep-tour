const mongoose = require("mongoose");

const { Schema } = mongoose;

const reservationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
