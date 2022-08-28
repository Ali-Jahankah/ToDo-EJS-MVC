const todosMethods = require("../utils/todos");

class Todo {
  constructor(id, text, completed = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }
  save(callback) {
    todosMethods.getTodos((todos) => {
      todos.push(this);
      todosMethods.saveTodos(todos, (err) => {
        callback(err);
      });
    });
  }
  static getAllTodos(callback) {
    todosMethods.getTodos((todos) => {
      callback(todos);
    });
  }
  static deleteTodo(id, callback) {
    todosMethods.getTodos((todos, err) => {
      todosMethods.saveTodos(
        todos.filter((item) => item.id != id),
        (err) => {
          callback(err);
        }
      );
    });
  }
  static completeTodo(id, callback) {
    todosMethods.getTodos((todos, err) => {
      const todosIndex = todos.findIndex((item) => item.id == id);
      const newTodo = todos[todosIndex];
      newTodo.completed = !todos[todosIndex].completed;
      todos[todosIndex] = newTodo;
      todosMethods.saveTodos(todos, (err) => {
        callback(err);
      });
    });
  }
}
module.exports = Todo;
