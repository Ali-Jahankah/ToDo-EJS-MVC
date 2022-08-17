const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set('views,"views');

app.use(express.static(path.join(__dirname, "public")));
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
