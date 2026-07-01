const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

let users = [];

router.post("/register", (req, res) => {
  users.push(req.body);
  res.json({ message: "User registered" });
});

router.post("/login", (req, res) => {
  const user = users.find(u => u.email === req.body.email);
  if (!user) return res.status(401).send("Invalid");

  const token = jwt.sign({ email: user.email }, "secret");
  res.json({ token });
});

module.exports = router;
