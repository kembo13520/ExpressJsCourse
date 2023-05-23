const express = require("express");
const router = express.Router();
const { Comments } = require("../models");

router.get('/:postId', async (req,res) => {
  const postId = req.params.postId
  const data = await Comments.findAll({where: {PostId: postId}})
  if (data) {
    res.json(data)
  }
})

router.post('/', async (req,res) => {
    const content = req.body
    console.log('heheheh',content)
    await Comments.create(content)
    console.log('aaaaa')
    res.json(content)
  })

module.exports = router;
