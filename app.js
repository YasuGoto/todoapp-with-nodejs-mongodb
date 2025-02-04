const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("./public"));

// ルーティング設定
app.use(
  "/api/v1/tasks",
  taskRoute
);

app.get('/', async (_, res) => {
  try {
    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 404ハンドラー
app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

// エラーハンドラー
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

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
