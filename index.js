const express = require("express");
const productRouter = require("./routers/product");
const orderRouter = require("./routers/order");
const categoryRouter = require("./routers/category");
const customerRouter = require("./routers/customer");
const auth = require("./routers/auth");
const PORT = process.env.PORT || 4000;
const app = express();
const jsonParser = express.json();
const authMiddleware = require("./auth/middleware");

app.use(jsonParser);

app.use("/auth", auth);
app.use("/products", authMiddleware, productRouter);
app.use("/orders", orderRouter);
app.use("/categories", categoryRouter);
app.use("/customers", customerRouter);

app.listen(PORT, () => console.log("server started"));
