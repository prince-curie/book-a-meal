'use strict';

const roleSeeds = [
  {
    role_label: 'Admin',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    role_label: 'User',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]

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

    await queryInterface.bulkDelete('roles', null, {});
    await queryInterface.bulkInsert('roles', roleSeeds, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('roles', null, {});
  }
};
