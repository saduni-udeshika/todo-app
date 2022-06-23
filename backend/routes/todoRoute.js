const router = require("express").Router();
let todoModel = require("../models/todoModel");

/*add tasks*/
router.route("/add").post((req, res) => {
    const todoItem = req.body.todoItem;

    const newTodoModel = new todoModel({
        todoItem: todoItem
    })

    newTodoModel.save().then(() => {
        console.log("Item added");
        res.status(200).send({ status: "Item added" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: " Error with add items", error: err.message });
    })

})
/*view all task*/
router.route("/").get((req, res) => {
    todoModel.find().then((todoModel) => {
        res.json(todoModel);
    }).catch((error) => {
        console.log(error);
    })
})
/*Update task*/
router.route("/update").put(async (req, res) => {
    const { _id, todoItem } = req.body;

    const updateTodoItem = {
        todoItem
    }


    const update = await todoModel.findByIdAndUpdate(_id, updateTodoItem).then(() => {
        res.status(200).send({ status: "item updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data", error: err.message });
    })
})

/*delete task*/
router.route("/delete/:id").delete(async (req, res) => {
    let id = req.params.id;

    await todoModel.findByIdAndDelete(id).then(() => {
        res.status(200).send({ status: "Item deleted" });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: " Error with delete items", error: err.message });
    })
})

module.exports = router;