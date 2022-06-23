import { useState, useEffect } from "react";
import ListItems from "../components/ListItem/ListItem";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../services/todo.service";

const TodoPage = () => {
  const [todoItem, setInput] = useState("");
  const [items, setitems] = useState([]);
  const [isUpdate, setUpdate] = useState("");

  //view todo items
  const getItems = async () => {
    const todoResponse = await getTodos();
    setitems(todoResponse.data);
  };

  useEffect(() => {
    getItems();
  }, []);

  const sendTodoText = async (e) => {
    if (isUpdate === "") {
      await createTodo(todoItem);
    } else {
      await updateTodo(isUpdate, todoItem);
      setUpdate("");
    }
    setInput("");
    getItems();
  };

  //update
  const updateTodoItem = (_id, todoItem) => {
    setUpdate(_id);
    setInput(todoItem);
  };

  //delete
  const deleteTodoItem = async (id) => {
    await deleteTodo(id);
    getItems();
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="container-top">
        <input
          type="text"
          placeholder="Type something...."
          value={todoItem}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="submit" className="add" onClick={sendTodoText}>
          {isUpdate ? "UPDATE" : "ADD"}
        </button>
      </div>
      {items.map((item) => (
        <div key={item._id}>
          <ListItems
            todoItem={item.todoItem}
            remove={() => deleteTodoItem(item._id)}
            update={() => updateTodoItem(item._id, item.todoItem)}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoPage;
