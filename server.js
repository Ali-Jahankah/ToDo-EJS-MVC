const { setStatics } = require("./utils/static");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRoutes = require("./routes/admin");
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set('views,"views');
setStatics(app);
app.use("/admin", adminRoutes);
app.get("/", (req, res) => {
  res.render("index", { title: "TO DO List | EJS" });
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
