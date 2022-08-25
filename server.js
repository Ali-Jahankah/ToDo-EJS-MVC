const { setStatics } = require("./utils/static");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRoutes = require("./routes/admin");
const todosRoutes = require("./routes/index");
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set('views,"views');
setStatics(app);
app.use(todosRoutes);
app.use("/admin", adminRoutes);

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
