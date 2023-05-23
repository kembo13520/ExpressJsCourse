const express = require("express");
const router = express.Router();
const { Users } = require("../models");

router.get("/", async (req, res) => {
  const data = await Users.findAll();
  if (data) {
    res.json(data);
  }
});

// router.get("/byId/:id", async (req, res) => {
//   const id = req.params.id;
//   const data = await Users.findByPk(id);
//   if (data) {
//     res.json(data);
//   }
// });

// router.post("/", async (req, res) => {
//   const post = req.body;
//   await Users.create(post);
//   res.json(post);
// });

module.exports = router;
