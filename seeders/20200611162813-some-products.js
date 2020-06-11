"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Leo",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIsxDEr3crj6fp48eEqeBpEWyTAw0q3Zh6ZTzpWFRZEQ5yTYHrkRin-h_pLZI&usqp=CAc",
          description: "huggy teddyBear",
          price: 12,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Leo2.0",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2UOHu7bvdOcyeDcK7PFkbNVqyXaZxB66E_sOUOH64Ql5nxsSRIT4EfpWNtkIOpixSii-FSiuB&usqp=CAc",
          description: "sad teddyBear",
          price: 13,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  },
};
