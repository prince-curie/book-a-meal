import Joi from 'joi'

const loginValidator = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
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

export default loginValidator