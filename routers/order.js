const { Router } = require("express");
const Order = require("../models").order;
const Customer = require("../models").customer;
const OrderProducts = require("../models").orderedproduct;
const Product = require("../models").product;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.send(orders);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  const { customerId, productIds } = req.body;
  if (!customerId || !productIds || !productIds.length) {
    res.status(400).send("missing parameters");
  } else {
    try {
      const newOrder = await Order.create({ name: "HAHAHA", customerId });

      const orderProductCreatePromises = productIds.map(async (pId) => {
        console.log(pId);
        await OrderProducts.create({ orderId: newOrder.id, productId: pId });
      });

      await Promise.all(orderProductCreatePromises);

      const orderWithProducts = await Order.findByPk(newOrder.id, {
        include: [Product, Customer],
      });

      res.send(orderWithProducts);
    } catch (e) {
      next(e);
    }
  }
});

module.exports = router;
