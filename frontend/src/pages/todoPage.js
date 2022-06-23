import { useState, useEffect } from 'react';
import axios from "axios";
import ListItems from '../components/ListItem/ListItem';

const TodoPage = () => {
    const [todoItem, setInput] = useState("");
    const [items, setitems] = useState([]);
    const [isUpdate, setUpdate] = useState("");

    //view todo items
    function getItems() {
        axios.get("http://localhost:5000/todo/").then((res) =>
            setitems(res.data))
            .catch((err) => {
                alert(err.message);
            })
    }
    useEffect(() => {
        getItems();
    }, [])

    function sendTodoText(e) {
        if (isUpdate === "") {
            e.preventDefault();
            const newItem = {
                todoItem
            }
            axios.post("http://localhost:5000/todo/", newItem).then(() => {
                setInput("");
                getItems();
            }).catch((err) => {
                alert(err);
            })
        } else {
            axios.put("http://localhost:5000/todo/", { _id: isUpdate, todoItem }).then(() => {
                setInput("");
                setUpdate("");
                getItems();
            }).catch((err) => {
                console.log(err);
            })
        }
    }
    //update
    function updateTodoItem(_id, todoItem) {
        setUpdate(_id);
        setInput(todoItem);
    }

    //delete
    function deleteTodoItem(_id) {
        axios
            .delete("http://localhost:5000/todo/delete/" + `${_id}`)
            .then((res) => {
                getItems();
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <div className='container'>
            <h1>Todo App</h1>
            <div className='container-top'>
                <input type="text" placeholder='Type something....' value={todoItem} onChange={(e) => {
                    setInput(e.target.value);
                }} />
                <button type="submit" className='add' onClick={sendTodoText}>{isUpdate ? "update" : "Add"}</button>
            </div>
            {
                items.map((item) =>
                    <div className='container-icons' key={item._id}>
                        <ListItems todoItem={item.todoItem}
                            remove={() => deleteTodoItem(item._id)}
                            update={() => updateTodoItem(item._id, item.todoItem)} />
                    </div>
                )
            }
        </div >
    )
}

export default TodoPage;
