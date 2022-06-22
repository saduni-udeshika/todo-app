const router = require("express").Router();
const todoItems = require("../models/todoModel");

/*add tasks*/
router.route("/add").post((req, res) => {
    const { todoItem } = req.body;

    const newTodoItem = new todoItems({
        todoItem
    })
    newTodoItem.save(function (err) {
        if (!err) {
            res.send("To do item added.");
        } else {
            res.send(err);
        }
    })
})

module.exports = router;