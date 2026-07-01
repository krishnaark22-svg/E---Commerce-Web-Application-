const express = require("express");
const router = express.Router();

let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 }
];

router.get("/", (req, res) => res.json(products));

router.post("/", (req, res) => {
  const product = req.body;
  products.push(product);
  res.json(product);
});

module.exports = router;
