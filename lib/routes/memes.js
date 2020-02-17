const { Router } = require('express');
const Meme = require('../models/Meme');

module.exports = Router()
  .post('/', (req, res) => {
    Meme.create(req.body).then(meme => res.send(meme));
  })
  .get('/', (req, res, next) => {
    Meme.find()
      .then(meme => res.send(meme))
      .catch(next);
  })
  .get('/:id', (req, res) => {
    Meme.findById(req.params.id).then(meme => res.send(meme));
  })
  .patch('/:id', (req, res, next) => {
    Meme.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(meme => res.send(meme))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Meme.findByIdAndDelete(req.params.id)
      .then(meme => res.send(meme))
      .catch(next);
  });
