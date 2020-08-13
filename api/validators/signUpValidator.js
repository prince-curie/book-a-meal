import Joi from 'joi'

const signUpValidator = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phoneNumber: Joi.number(),
    password: Joi.string().required()
  })

  const {error, value} = schema.validate(req.body)
  if(error) {
    return res.status(400).json({
      status:400,
      message: error.message
    })
  }

  next()
}

export default signUpValidator