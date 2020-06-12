const express = require("express");
const productRouter = require("./routers/product");
const auth = require("./routers/auth");
const PORT = process.env.PORT || 4000;
const app = express();
const jsonParser = express.json();

app.use(jsonParser);

app.use("/auth", auth);
app.use("/products", productRouter);

app.listen(PORT, () => console.log("server started"));
