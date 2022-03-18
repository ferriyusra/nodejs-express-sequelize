'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('todolists', [{
      todolist: 'test 1',
      createdAt:  new Date(),
      updatedAt: new Date(),
    },
    {
      todolist: 'test 2',
      createdAt:  new Date(),
      updatedAt: new Date(),
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('todolists', null, {});
  }
};
