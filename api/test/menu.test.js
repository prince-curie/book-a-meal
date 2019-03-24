import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';


chai.should();
chai.use(chaiHttp);

const newMeal = {
  name: 'bah',
  size: 'big',
  price: 500,
};
const validateMeal = {
  name: 'bahg',
  size: 'big',
  price: '',
};
const oldMeal = {
  name: 'rice and beans',
  price: 500,
  size: 'small',
};

describe('/Post menu', () => {
  it('the server should return a status code of 200', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
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
      .post('/api/v1/menu')
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
      .post('/api/v1/menu')
      .send(newMeal)
      .end((err, res) => {
        res.should.have.status(409);
        res.body.should.have.property('data');
        res.body.data.should.be.a('string');
        done(err);
      });
  });
});
