const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  // memeId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true
  // },
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
