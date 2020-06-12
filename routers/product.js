const express = require("express");
const Products = require("../models").product;
const { Router } = express;

const router = new Router();

router.post("/", async (request, response, next) => {
  try {
    const { imageUrl, name, description, price } = request.body;
    if (!imageUrl || !name) {
      res.status(400).send("Must provide URL and title");
    } else {
      const product = await Products.create(request.body);
      response.json(product);
    }
  } catch (e) {
    next(e);
  }
});

router.get("/", async (request, response) => {
  const limit = Math.min(request.query.limit || 25, 500);
  const offset = request.query.offset || 0;

  Products.findAndCountAll({ limit, offset })
    .then((result) =>
      response.send({ products: result.rows, total: result.count })
    )
    .catch((error) => next(error));
});

module.exports = router;
