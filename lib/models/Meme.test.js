const mongoose = require('mongoose');
const Meme = require('./Meme');

describe('Meme Model', () => {
  it('has a required memeId', () => {
    const meme = new Meme();
    const { errors } = meme.validateSync();

    expect(errors.memeId.message).toEqual('Path `memeId` is required.');
  });

  it('has a required headerText', () => {
    const meme = new Meme();
    const { errors } = meme.validateSync();

    expect(errors.headerText.message).toEqual('Path `headerText` is required.');
  });

  it('has a required imageUrl', () => {
    const meme = new Meme();
    const { errors } = meme.validateSync();

    expect(errors.imageUrl.message).toEqual('Path `imageUrl` is required.');
  });
});
