const Todo = require("../model/todo");

exports.getIndex = (req, res) => {
  Todo.getAllTodos((todos) => {
    console.log(todos);
    res.render("index", {
      title: "EJS | TODO List",
      todos,
    });
  });
};
