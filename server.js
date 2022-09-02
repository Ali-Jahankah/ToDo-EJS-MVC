const { setStatics } = require("./utils/static");
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./utils/database");
const app = express();
const adminRoutes = require("./routes/admin");
const todosRoutes = require("./routes/index");
const error = require("./controllers/error");
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set('views,"views');
setStatics(app);
app.use(todosRoutes);
app.use("/admin", adminRoutes);
app.use(error.error404);
sequelize
  .sync()
  .then((res) => {
    app.listen(port, () => {
      console.log(`app is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
