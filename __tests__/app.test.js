const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {

  it('it gets a string hi from /', async () => {

    const res = await request(app).get('/');
    expect(res.text).toEqual('hi');

  });

  it('it gets a body from /echo', async () => {

    const res = await request(app).post('/echo').send('something');
    expect(res.text).toEqual('something');

  });

  it('it gets color red from /red', async () => {

    const res = await request(app).get('/red');
    expect(res.text).toEqual('<h1>red<h1>');

  });

  it('it gets color red from /green', async () => {

    const res = await request(app).get('/green');
    expect(res.text).toEqual('<h1>green<h1>');

  });

  it('it gets color red from /blue', async () => {

    const res = await request(app).get('/blue');
    expect(res.text).toEqual('<h1>blue<h1>');

  });





});
