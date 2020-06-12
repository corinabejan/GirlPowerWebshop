// const { Router } = require("express");
// const Order = require("../models").order;
// const Customer = require("../models").customer;
// const OrderProducts = require("../models").orderedproduct;
// const Product = require("./models").product;
// const router = new Router();

// router.post("/", async (req, res, next) => {
//   const { name, productId, customerId } = req.body;
//   if (!productId || !customerId || !productId.length || !name) {
//     res.status(400).send("Invalid order!");
//   } else {
//     try {
//       const newOrder = await Order.create({  customerId, name });

//       const orderProductCreatePromises = productIds.map(
//         async (pId) =>
//           await OrderProducts.create({ orderId: newOrder.id, productId: pId })
//       );

//       await Promise.all(orderProductCreatePromises);

//       const orderWithProducts = await Order.findByPk(newOrder.id, {
//         include: [Product, Customer],
//       });

//       res.send(orderWithProducts);
//     } catch (e) {
//       next(e);
//     }
//   }
// });

// router.get("/", async (req, res, next) => {
//   try {
//     const orders = await Order.findAll({ include: [User] });
//     res.json(orders);
//   } catch (e) {
//     next(e);
//   }
// });

// module.exports = router;
