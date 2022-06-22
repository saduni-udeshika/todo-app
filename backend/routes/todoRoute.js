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
/*view all task*/
router.route("/").get((req, res) => {
    todoItems.find().then((todoItem) => {
        res.json(todoItem);
    }).catch((error) => {
        console.log(error);
    })
})

module.exports = router;