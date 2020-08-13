import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import models from '../models'
const { User } = models

dotenv.config()

exports.login = async(data) => {
  let user = await User.findOne({ where: { email: data.email }})
  if(user === null) return {
      status: 400,
      message: 'email or password incorrect'
    }
  user = user.toJSON()

  const comparePassword = await bcrypt.compare(data.password, user.password)
  if(comparePassword === false) return {
      status: 400,
      message: 'email or password incorrect'
    }
  delete user.password

  const token = jwt.sign(user, 
    process.env.JWT_SECRET, {expiresIn: 60 * 30}
  )

  return {
    status: 200,
    message: "Login successful",
    data: { token, user }
  } 
}

exports.signUp = async(data) => {
  await User.create(data)

  return {
    status: 200,
    message: "Signup successful",
  }
}