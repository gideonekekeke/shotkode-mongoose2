const mongoose = require("mongoose");

const mySchema = mongoose.Schema({
  name: {
    type: String,
  
  },
  location: {
    type: String,
   
  },
  contact: {
    type: Number,

  },

  Picture: {
    type: String,
   
  },

  // cover: {
  //   type: String,
  //   required: true,
  // },
});

module.exports = mongoose.model("Teachers", mySchema);
