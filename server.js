const express = require("express");
const bodyParser = require("body-parser");
require("./utils/database");
const { setStatics } = require("./utils/static");
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
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
