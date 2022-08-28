const Todo = require("../model/todo");
const todosMethods = require("../utils/todos");
exports.addTodo = (req, res) => {
  if (!req.body.todo) {
    return res.redirect("/");
  }
  const todo = new Todo(todosMethods.randomId(), req.body.todo);
  todo.save((err) => {
    if (!err) {
      return res.redirect("/");
    } else {
      console.log(err);
    }
  });
};
exports.deleteTodo = (req, res) => {
  Todo.deleteTodo(req.params.id, (err) => {
    if (!err) {
      res.redirect("/");
    } else {
      console.log(err);
    }
  });
};
exports.completeTodo = (req, res) => {
  Todo.completeTodo(req.params.id, (err) => {
    if (!err) {
      res.redirect("/");
    } else {
      console.log(err);
    }
  });
};
