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
    // await connectDB(process.env.MONGO_URL);
    await connectDB(
      "mongodb+srv://myis0122:Yy19980122@cluster0.ehy8u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("mongoDB接続成功");
    app.listen(PORT, console.log("サーバーが立ち上がりました"));
  } catch (err) {
    console.log(`データベース接続失敗${err}`);
  }
};

start();
