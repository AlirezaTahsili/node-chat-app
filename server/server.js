const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
