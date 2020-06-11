const Order = require("./models").order;
const Customer = require("./models").customer;
const Product = require("./models").product;
const category = require("./models").category;

const getOrder = async (id) => {
  const product = await Product.findByPk(id, { include: [category] });
  console.log(product);
};

getOrder(2);
