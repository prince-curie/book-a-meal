import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';

chai.should();
chai.use(chaiHttp);

const newMeal = {
  name: 'bahg',
  size: 'big',
  price: 500,
  status: 'available',
};
const validateMeal = {
  name: 'bahg',
  size: 'big',
  price: '',
  status: 'available',
};
const oldMeal = {
  name: 'rice and beans',
  price: 500,
  size: 'medium',
  status: 'available',
};

describe('/get meal', () => {
  it('the server should return a status code of 200', (done) => {
    chai.request(app)
      .get('/api/v1/meals')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        res.body.should.have.property('data');
        done(err);
      });
  });
});
describe('/Post meal', () => {
  it('the server should return a status code of 200', (done) => {
    chai.request(app)
      .post('/api/v1/meals')
      .send(newMeal)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('data').be.an('array');
        done(err);
      });
  });
  it('the server should return a validation error', (done) => {
    chai.request(app)
      .post('/api/v1/meals')
      .send(validateMeal)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('data');
        res.body.data.should.be.a('string');
        done(err);
      });
  });
  it('the server should return an error for multiple post', (done) => {
    chai.request(app)
      .post('/api/v1/meals')
      .send(oldMeal)
      .end((err, res) => {
        res.should.have.status(409);
        res.body.should.have.property('data');
        res.body.data.should.be.a('string');
        done(err);
      });
  });
});

const updateMeal = {
  size: 'small',
};

const updateMealError = {
  price: 'Hell',
};

describe('/PUT meal', () => {
  it('the server should return success', (done) => {
    chai.request(app)
      .put('/api/v1/meals/rice and beans/medium')
      .send(updateMeal)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('data').be.an('array');
        res.body.data[0].price.should.be.a('number');
        res.body.data[0].status.should.be.a('string');
        res.body.data[0].size.should.be.a('string');
        done(err);
      });
  });
  it('returns an error 404', (done) => {
    chai.request(app)
      .put('/api/v1/meals/rice and beans/big')
      .send(updateMeal)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property('data');
        res.body.data.should.be.a('string');
        done(err);
      });
  });
  it('returns an error 400', (done) => {
    chai.request(app)
      .put('/api/v1/meals/rice and beans/small')
      .send(updateMealError)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('data');
        res.body.data.should.be.a('string');
        done(err);
      });
  });
});
