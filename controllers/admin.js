const Todo = require("../model/todo");

exports.addTodo = (req, res) => {
  if (!req.body.todo) {
    return res.redirect("/");
  }
  // const todo = new Todo(todosMethods.randomId(), req.body.todo);
  // todo.save((err) => {
  //   if (!err) {
  //     return res.redirect("/");
  //   } else {
  //     console.log(err);
  //   }
  // });
  Todo.create({ text: req.body.todo })
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};
exports.deleteTodo = (req, res) => {
  // Todo.deleteTodo(req.params.id, (err) => {
  //   if (!err) {
  //     res.redirect("/");
  //   } else {
  //     console.log(err);
  //   }
  // });
  Todo.destroy({ where: { id: req.params.id } })
    .then((result) => res.redirect("/"))
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
  Todo.findByPk(req.params.id)
    .then((todo) => {
      todo.completed = true;
      return todo.save();
    })
    .then((result) => res.redirect("/"))
    .catch((err) => console.log(err));
};
