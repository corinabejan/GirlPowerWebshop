const express = require("express");
const Products = require("../models").product;
const { Router } = express;

const router = new Router();

router.post("/", async (request, response, next) => {
  try {
    const { imageUrl, name } = request.body;
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

router.put("/:id", async (request, response, next) => {
  try {
    const id = request.params.id;
    const productToUpdate = await Products.findByPk(id);
    if (!productToUpdate) {
      response.status(404).send("User not found");
    } else {
      const updatedProduct = await productToUpdate.update(request.body);
      response.json(updatedProduct);
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

router.get("/:id", async (request, response, next) => {
  try {
    const id = request.params.id;
    const product = await Products.findByPk(id);
    if (!product) {
      response.status(404).send("User not found");
    } else {
      response.json(product);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
