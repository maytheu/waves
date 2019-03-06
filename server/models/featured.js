const mongoose = require("mongoose");

const featuredSchema = mongoose.Schema({
  lineOne: {
    required: true,
    type: String,
    maxlength: 50
  },
  lineTwo: {
    required: true,
    type: String,
    maxlength: 50
  },
  linkTitle: {
    required: true,
    type: String,
    maxlength: 100
  },
  linkTo: {
    required: true,
    type: String,
    maxlength: 15
  },
  images: {
    type: Array,
    default: []
  }
});

const Featured = mongoose.model("Featured", featuredSchema);

module.exports = { Featured };
