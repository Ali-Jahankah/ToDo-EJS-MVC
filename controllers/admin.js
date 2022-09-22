const Todo = require("../model/todo");

exports.addTodo = (req, res) => {
  if (!req.body.todo) {
    return res.redirect("/");
  }

  Todo.create({ text: req.body.todo })
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};
exports.deleteTodo = (req, res) => {
  Todo.findByIdAndRemove(req.params.id)
    .then((result) => res.clearCookie("myToken").redirect("/"))
    .catch((err) => console.log(err));
};
exports.completeTodo = (req, res) => {
  Todo.findById(req.params.id)
    .then((todo) => {
      todo.completed = !todo.completed;
      return todo.save();
    })
    .then((result) => res.cookie("myToken", req.params.id).redirect("/"))
    .catch((err) => console.log(err));
};
exports.setSession = (req, res) => {
  if (req.session.view) {
    req.session.view++;
    res.send(`You are visiting this page for ${req.session.view} times`);
  } else {
    req.session.view = 1;
    res.send(`You are visiting this page for First times`);
  }
  res.send("new session");
};
