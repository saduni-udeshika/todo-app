const { addTodo, getTodo, deleteTodo, updateTodo } = require("../controllers/todoController");
const router = require("express").Router();

router.post("/", addTodo);
router.get("/", getTodo);
router.delete("/:id", deleteTodo);
router.put("/", updateTodo);

module.exports = router;