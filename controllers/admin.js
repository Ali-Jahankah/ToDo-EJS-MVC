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
  // Todo.completeTodo(req.params.id, (err) => {
  //   if (!err) {
  //     res.redirect("/");
  //   } else {
  //     console.log(err);
  //   }
  // });
  Todo.findById(req.params.id)
    .then((todo) => {
      todo.completed = !todo.completed;
      return todo.save();
    })
    .then((result) => res.cookie("myToken", req.params.id).redirect("/"))
    .catch((err) => console.log(err));
};
