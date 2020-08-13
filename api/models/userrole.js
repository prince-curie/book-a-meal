'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define('UserRole', {
    user_id: { type: DataTypes.INTEGER },
    role_id: { type: DataTypes.INTEGER },  
  }, {
    tableName: 'user_roles'
  }, )
    
  return UserRole;
};