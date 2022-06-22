const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todoItem: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});


const todoItems = mongoose.model("todoItems", todoSchema);

module.exports = todoItems;