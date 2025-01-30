const express = require('express');
const app = express();
const PORT = 3000;
const taskRoute = require('./routes/tasks');

// ルーティング設定
app.use("/api/v1/tasks", taskRoute);

app.listen(PORT, console.log("サーバーが立ち上がりました"));