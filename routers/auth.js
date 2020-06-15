const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const Customer = require("../models").customer;
const router = new Router();

router.post("/signup", async (req, res, next) => {
  try {
    const { name, email, password, phone, address } = req.body;
    if (!name || !email || !password || !phone || !address) {
      res.status(400).send("Missing parameters for sign up");
    } else {
      const hashedPassword = bcrypt.hashSync(password, 10);
      const nameArray = name.split(" ");
      const user = await Customer.create({
        firstName: nameArray[0],
        lastName: nameArray[1],
        email,
        password: hashedPassword,
        phone: phone,
        address: address,
      });
      res.send(user);
    }
  } catch (e) {
    next(e);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await Customer.findOne({ where: { email } });
    if (!user) {
      res.status(404).send("User not found");
    } else {
      const passwordMatch = bcrypt.compareSync(password, user.password);
      console.log("passwords match?", passwordMatch);

      if (passwordMatch) {
        const token = toJWT({ userId: user.id });
        res.send({ token });
      } else {
        res.status(401).send("Wrong password");
      }
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
