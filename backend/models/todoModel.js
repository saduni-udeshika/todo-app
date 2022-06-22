const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todoItem: {
        type: String,
        required: true
    }
});


const todoItems = mongoose.model("todoItems", todoSchema);

module.exports = todoItems;