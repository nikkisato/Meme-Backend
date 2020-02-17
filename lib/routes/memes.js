const { Router } = require('express');
const Meme = require('../models/Meme');

module.exports = Router()
  .post('/', (req, res) => {
    Meme.create(req.body).then(meme => res.send(meme));
  })
  .get('/', (req, res) => {
    Meme.find()
      .select({ meme: false })
      .then(meme => res.send(meme));
  })
  .get('/:id', (req, res) => {
    Meme.findById(req.params.id).then(meme => res.send(meme));
  });
