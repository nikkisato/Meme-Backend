const mongoose = require('mongoose');

const schema = new mongoose.Schema({

  headerText: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  footerText: {
    type: String
  }
});

module.exports = mongoose.model('Meme', schema);
