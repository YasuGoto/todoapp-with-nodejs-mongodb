const express = require("express");
const app = express();
const PORT = 3000;
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.json());
app.use(express.static("./public"));

// ルーティング設定
app.use(
  "https://todoapp-with-nodejs-mongodb-bg20.onrender.com/api/v1/tasks",
  taskRoute
);

// DB接続
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("mongoDB接続成功");
    app.listen(PORT, console.log("サーバーが立ち上がりました"));
  } catch (err) {
    console.log(`データベース接続失敗${err}`);
  }
};

start();
