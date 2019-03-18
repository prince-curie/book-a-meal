import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.should();
chai.use(chaiHttp);

describe('Test server', () => {
  it('The server should return a status code of 200', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done(err);
      });
  });
  it('The server shold return a object', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.be.a('object');
        done(err);
      });
  });
  it('The server should return a message', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.body.should.have.property('data');
        done(err);
      });
  });
});
