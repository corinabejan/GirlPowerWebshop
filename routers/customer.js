const express = require("express");
const Customer = require("../models").customer;
const { Router } = express;

const router = new Router();

router.get("/", async (request, response) => {
  const limit = Math.min(request.query.limit || 25, 500);
  const offset = request.query.offset || 0;

  Customer.findAndCountAll({ limit, offset })
    .then((result) =>
      response.send({ customer: result.rows, total: result.count })
    )
    .catch((error) => next(error));
});

router.get("/:id", async (request, response) => {
  const { id } = request.params;
  const customer = await Customer.findByPk(id);
  response.send(customer);
});

router.get("/email/:email", async (request, response, next) => {
  const { email } = request.params;
  try {
    const customer = await Customer.findOne({ where: { email } });
    response.json(customer);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
