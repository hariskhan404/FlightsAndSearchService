"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Airports",[
        {
          name: "Islamabad International Airport",
          cityId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Benazir Bhutto International Airport",
          cityId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Allama Iqbal International Airport",
          cityId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jee International Airport",
          cityId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
