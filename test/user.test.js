import chai, { assert } from 'chai';
import chaiHttp from 'chai-http';
// import { describe, it } from 'mocha';
import app from '../index';
import UserController from '../api/controllers/user.controller'
const Controller = new UserController()

const dotenv = require('dotenv')
dotenv.config()

chai.should();
chai.use(chaiHttp);

const user1 = {
  email: "caterer@admin.com",
  password: "secretPassword"
}

const incorrectEmail = {
  email: "caterer1@admin.com",
  password: "secretPassword"
}

const incorrectPassword = {
  email: "caterer@admin.com",
  password: "secret1Password"
}

const newUser = {
  email: 'me@you.com',
  firstName: 'me',
  lastName: 'you',
  phoneNumber: 1234567890,
  password: 'secretPassword'
}

describe('User login', () => {
  it('should return user details', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(user1)
      .end((err, res) => {
        res.body.data.user.should.be.an('object')
        res.body.data.user.email.should.equal(user1.email)
        done(err)
      })
  })

  it('should return a status code of 200', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(user1)
      .end((err, res) => {
        res.body.status.should.be.a('number')
        res.body.status.should.equal(200)
        done(err)
      })
  })

  it('should return a token', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(user1)
      .end((err, res) => {
        res.body.data.token.should.be.a('string')
        done(err)
      })
  })

  it('should return an error message for incorrect email', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(incorrectEmail)
      .end((err, res) => {
        res.body.should.be.an('object')
        res.body.message.should.equal('email or password incorrect')
        res.body.status.should.equal(400)
        done(err)
      })
  })

  it('should return an error message for incorrect password', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(incorrectPassword)
      .end((err, res) => {
        res.body.should.be.an('object')
        res.body.message.should.equal('email or password incorrect')
        res.body.status.should.equal(400)
        done(err)
      })
  })

  it('should return an error message for no email', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send({password: user1.password})
      .end((err, res) => {
        res.body.should.be.an('object')
        res.body.message.should.equal('"email" is required')
        res.body.status.should.equal(400)
        done(err)
      })
  })

  it('should return an error message for no password', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send({email: user1.email})
      .end((err, res) => {
        res.body.should.be.an('object')
        res.body.message.should.equal('"password" is required')
        res.body.status.should.equal(400)
        done(err)
      })
  })

  it('should return an error message for bad email format', (done) => {
    user1.email = 'you@tube'
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(user1)
      .end((err, res) => {
        res.body.should.be.an('object')
        res.body.message.should.equal('"email" must be a valid email')
        res.body.status.should.equal(400)
        done(err)
      })
  })
})

describe('Signup', () => {
  it('should occur successfully', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        res.body.should.be.an('object')
        res.body.message.should.equal("Signup successful")
        res.body.status.should.equal(200)
        done(err)
      })
  })
})
