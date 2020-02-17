const mongoose = require('mongoose');

const schema = new mongoose.Schema({

  inTopText: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  inBottomText: {
    type: String
  }
});

module.exports = mongoose.model('Meme', schema);


// inTopText
// inBottomText
