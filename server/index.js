const express = require("express");
const postRouter = require("./routes/Posts.js");
const commentRouter = require("./routes/Comments.js");
const userRouter = require("./routes/Users.js");
var bodyParser = require("body-parser");
const app = express();

const db = require("./models");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routers
app.use("/posts", postRouter);
app.use("/comments", commentRouter);
app.use("/users", userRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("dcm chay roi !!!");
  });
});
