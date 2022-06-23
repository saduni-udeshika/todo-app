let todoModel = require("../models/todoModel");

module.exports.addTodo = async (req, res) => {
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

}

module.exports.getTodo = async (req, res) => {
    todoModel.find().then((todoModel) => {
        res.json(todoModel);
    }).catch((error) => {
        console.log(error);
    })
}
module.exports.updateTodo = async (req, res) => {
    const { _id, todoItem } = req.body;

    const updateTodoItem = {
        todoItem
    }
    await todoModel.findByIdAndUpdate(_id, updateTodoItem).then(() => {
        res.status(200).send({ status: "item updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data", error: err.message });
    })
}
module.exports.deleteTodo = async (req, res) => {
    let _id = req.params.id;

    await todoModel.findByIdAndDelete(_id).then(() => {
        res.status(200).send({ status: "Item deleted" });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: " Error with delete items", error: err.message });
    })
}