import chai from 'chai';
import chaiHttp from 'chai-http';
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
