'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    // Hash password

    const salt = 10
    const plainText = 'secretPassword'
     
    let hashedPassword = await bcrypt.hash(plainText, salt)
      .then( hash => hash)
      
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkInsert('users', [{
      firstName: 'Caterer',
      lastName: 'Admin',
      email: 'caterer@admin.com',
      phoneNumber: 81998765670,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('users', null, {});
  }
};
