'use strict';
const {
  Model
} = require('sequelize');
// import model from '../models'
// const { UserRole, User } = model
// const User = require('./user');
// const UserRole = require('./userrole');

module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    role_label: { type: DataTypes.STRING }
  }, {
    tableName: 'roles'
  }, )    

  // Role.belongsToMany(User, {through: UserRole})
  
  return Role;
};