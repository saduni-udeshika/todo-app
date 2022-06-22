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
/*Update task*/
router.route("/update/:id").put(async (req, res) => {
    let id = req.params.id;
    const { todoItem } = req.body;

    const updateTodoItem = {
        todoItem
    }


    const update = await todoItems.findByIdAndUpdate(id, updateTodoItem).then(() => {
        res.status(200).send({ status: "item updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data", error: err.message });
    })
})
/*delete task*/
router.route("/delete/:id").delete(async (req, res) => {
    let id = req.params.id;

    await todoItems.findByIdAndDelete(id).then(() => {
        res.status(200).send({ status: "Item deleted" });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: " Error with delete items", error: err.message });
    })
})

module.exports = router;