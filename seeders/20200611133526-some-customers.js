"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "customers",
      [
        {
          firstName: "Leo",
          lastName: "Messi",
          email: "leo@messi.com",
          password: "12345",
          address: "street 1",
          phone: 1234567,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Dan",
          lastName: "Abramov",
          email: "dan@redux.com",
          password: "12345",
          address: "street 1",
          phone: 1234567,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("customers", null, {});
  },
};
