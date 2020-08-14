'use strict';

const userRoleSeeds = [
  {
    user_id: 1,
    role_id: 1,
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

    await queryInterface.bulkDelete('user_roles', null, {});
    await queryInterface.bulkInsert('user_roles', userRoleSeeds, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('user_roles', null, {});
  }
};
