const Todo = require("../model/todo");

exports.getIndex = (req, res) => {
  Todo.getAllTodos((todos) => {
    res.render("index", {
      title: "EJS | TODO List",
      todos,
    });
  });
};
