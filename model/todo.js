const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/path");

const filePath = path.join(rootDir, "data", "todos.json");

class Todo {
  constructor(id, text, completed = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }
  save(callback) {
    fs.readFile(filePath, (err, content) => {
      const todos = JSON.parse(content);
      todos.push(this);
      fs.writeFile(filePath, JSON.stringify(todos), (err) => {
        if (err) {
          return callback(err);
        } else {
          return callback([]);
        }
      });
    });
  }
  static getAllTodos(callback) {
    fs.readFile(filePath, (err, content) => {
      if (err) {
        return [];
      }
      const todos = JSON.parse(content);
      return callback(todos);
    });
  }
  static deleteTodo(id, callback) {
    fs.readFile(filePath, (err, content) => {
      const todos = JSON.parse(content);
      const filteredTodos = todos.filter((item) => item.id != id);

      console.log(filteredTodos, todos);
      fs.writeFile(filePath, JSON.stringify(filteredTodos), (err) => {
        callback(err);
      });
    });
  }
}
module.exports = Todo;
