"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "LeoCategory",
          imageUrl:
            "https://mlvam4jricmp.i.optimole.com/-6CZ4kE.2reR~3dded/w:1920/h:1280/q:auto/https://www.airworksrentals.com/wp-content/uploads/2018/11/Rentals-Teddy-Ed-Rupert-02.jpg",
          description: "huggy teddyBear",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Leo2.0Category",
          imageUrl:
            "https://mlvam4jricmp.i.optimole.com/-6CZ4kE.2reR~3dded/w:1920/h:1280/q:auto/https://www.airworksrentals.com/wp-content/uploads/2018/11/Rentals-Teddy-Ed-Rupert-02.jpg",
          description: "sad teddyBear",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
