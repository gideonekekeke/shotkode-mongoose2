const mongoose = require("mongoose");

const mySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },

  Picture: {
    type: String,
    required: true,
  },

  // cover: {
  //   type: String,
  //   required: true,
  // },
});

module.exports = mongoose.model("Teachers", mySchema);
