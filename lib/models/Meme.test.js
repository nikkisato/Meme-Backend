const mongoose = require('mongoose');
const Meme = require('./Meme');

describe('Meme Model', () => {
  

  it('has a required inTopText', () => {
    const meme = new Meme();
    const { errors } = meme.validateSync();

    expect(errors.inTopText.message).toEqual('Path `inTopText` is required.');
  });

  it('has a required imageUrl', () => {
    const meme = new Meme();
    const { errors } = meme.validateSync();

    expect(errors.imageUrl.message).toEqual('Path `imageUrl` is required.');
  });
});
