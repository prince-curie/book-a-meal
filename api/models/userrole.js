'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define('UserRoles', {
    user_id: { type: DataTypes.INTEGER },
    role_id: { type: DataTypes.INTEGER },  
  }, {}, )
    
  return UserRole;
};