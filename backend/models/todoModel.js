const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todoItem: {
        type: String,
        required: true
    }
});


const todoModel = mongoose.model("todoItem", todoSchema);

module.exports = todoModel;