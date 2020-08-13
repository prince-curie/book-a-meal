'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
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