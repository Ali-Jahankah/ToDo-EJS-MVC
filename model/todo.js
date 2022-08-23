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
    fs.writeFile(filePath, JSON.stringify(this), (err) => {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        console.log("New Task added");
        return callback([1]);
      }
    });
  }
}
module.exports = Todo;
