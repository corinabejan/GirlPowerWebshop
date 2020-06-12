const Order = require("./models").order;
const Customer = require("./models").customer;
const Product = require("./models").product;
const category = require("./models").category;

const getProducts = async (id) => {
  const limit = 10;
  const offset = 0;

  const product = await Product.findAndCountAll({ limit, offset })
    .then((result) =>
      console.log({ products: result.rows, total: result.count })
    )
    .catch((error) => console.log(error));
  console.log(product);
};

/* /* router.get("/", (req, res, next) => {
  const limit = Math.min(req.query.limit || 25, 500);
  const offset = req.query.offset || 0;

  Products.findAndCountAll({ limit, offset })
    .then((result) => res.send({ products: result.rows, total: result.count }))
    .catch((error) => next(error));
}); */

/* const getProducts = async () => {
  try {
    const products = await Product.findAll();
    console.log()
  } catch (e) {
    next(e);
  }
};  */
getProducts();
