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

module.exports = router;
