const express = require("express");
const app = express();
const PORT = 3000;
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
app.use(express.json());

// ルーティング設定
app.use("/api/v1/tasks", taskRoute);

// DB接続
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, console.log("サーバーが立ち上がりました"));
  } catch (err) {
    console.log(err);
  }
};

start();
