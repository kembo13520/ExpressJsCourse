const express = require("express");
   const router = express.Router();
const { Posts } = require("../models");

router.get("/", async (req, res) => {
  const data = await Posts.findAll()
  if (data) {
    res.json(data)
  }
});

router.get('/byId/:id', async (req,res) => {
  const id = req.params.id
  const data = await Posts.findByPk(id)
  if (data) {
    res.json(data)
  }
})

router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post)
});

module.exports = router;
