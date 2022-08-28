const fs = require("fs");
const path = require("path");

const rootPath = require("./path");
const filePath = path.join(rootPath, "data", "todos.json");

exports.randomId = () => {
  return Math.floor(Math.random() * 1000);
};
exports.getTodos = (callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      return callback([]);
    }
    callback(JSON.parse(content));
  });
};
exports.saveTodos = (todos, callback) => {
  fs.writeFile(filePath, JSON.stringify(todos), (err) => {
    callback(err);
  });
};
