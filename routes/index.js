const express = require("express");
const router = express.Router();
const todosController = require("../controllers/index");

router.get("/", todosController.getIndex);

module.exports = router;
