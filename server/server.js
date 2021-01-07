const path = require("path");
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(bodyParser.json());
app.use(express.static(publicPath));

io.on("connection", (socket) => {
  console.log("New User Connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(port, () => {
  console.log(`Started on port ${port}`);
});
