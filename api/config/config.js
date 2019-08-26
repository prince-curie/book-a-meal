// import dotenv from 'dotenv'

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWWORD,
    database: process.env.DB,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWWORD,
    database: process.env.TEST_DB,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWWORD,
    database: process.env.DB,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: false,
  },
};
