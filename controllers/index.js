const Todo = require("../model/todo");

exports.getIndex = (req, res) => {
  Todo.findAll().then((todos) => {
    const comps = todos.filter((item) => item.completed === true);
    const nonComps = todos.filter((item) => item.completed === false);
    res.render("index", {
      title: "EJS | TODO List",
      todos: {
        todos,
        comps,
        nonComps,
      },
    });
  });
};
