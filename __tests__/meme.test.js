require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app.js');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Meme = require('../lib/models/Meme');

describe('event routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  let meme;
  beforeEach(async () => {
    meme = await Meme.create({
      headerText: 'HI',
      imageUrl:
        'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/25201637/day_2_dec_14_085.jpg',
      footerText: 'Corgi'
    });
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('creates an meme', () => {
    return request(app)
      .post('/api/v1/memes')
      .send({
        headerText: 'HI',
        imageUrl:
          'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/25201637/day_2_dec_14_085.jpg',
        footerText: 'Corgi'
      })
      .then(res => {
        console.log(res.body);
        expect(res.body).toEqual({
          _id: expect.any(String),
          headerText: expect.any(String),
          imageUrl: expect.any(String),
          footerText: expect.any(String),
          __v: 0
        });
      });
  });

  it('it gets all memes', () => {
    return request(app)
      .get('/api/v1/memes')
      .then(res => {
        expect(res.body).toEqual([
          {
            _id: expect.any(String),
            headerText: expect.any(String),
            imageUrl: expect.any(String),
            footerText: expect.any(String),
            __v: 0
          }
        ]);
      });
  });

  it('gets a meme by Id', () => {
    return request(app)
      .get(`/api/v1/memes/${meme._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          headerText: expect.any(String),
          imageUrl: expect.any(String),
          footerText: expect.any(String),
          __v: 0
        });
      });
  });

  it('updates a meme by Id', () => {
    return request(app)
      .patch(`/api/v1/memes/${meme._id}`)
      .send({ footerText: 'HI' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          headerText: expect.any(String),
          imageUrl: expect.any(String),
          footerText: 'HI',
          __v: 0
        });
      });
  });

  it('deletes a meme by Id', () => {
    return request(app)
      .delete(`/api/v1/memes/${meme._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          headerText: expect.any(String),
          imageUrl: expect.any(String),
          footerText: expect.any(String),
          __v: 0
        });
      });
  });
});
