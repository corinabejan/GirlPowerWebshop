const express = require("express");
const Categories = require("../models").category;
const { Router } = express;

const router = new Router();

router.post("/", async (request, response, next) => {
  try {
    const { imageUrl, name, description } = request.body;
    if (!imageUrl || !name || !description) {
      res.status(400).send("Must provide URL and title");
    } else {
      const categories = await Categories.create(request.body);
      response.json(categories);
    }
  } catch (e) {
    next(e);
  }
});

router.get("/", (request, response) => {
  const limit = Math.min(request.query.limit || 25, 500);
  const offset = request.query.offset || 0;

  Categories.findAndCountAll({ limit, offset })
    .then((result) =>
      response.send({ categories: result.rows, total: result.count })
    )
    .catch((error) => next(error));
});

module.exports = router;