'use strict';
const {
  Model
} = require('sequelize');
const Role = require('./Role');
const UserRole = require('./userrole');

const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    phoneNumber: { type: DataTypes.BIGINT },
    password: { type: DataTypes.STRING },
  }, {}, )

  User.beforeCreate( async (user, options) => {
    // do stuff
    const hashedPassword = await bcrypt.hash(user.password, 10)
    user.password = hashedPassword
  })

  // User.belongsToMany(Role, {through: UserRole})

  return User;
};