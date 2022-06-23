import { useState, useEffect } from 'react';
import axios from "axios";
import ListItems from '../components/ListItem/ListItem';
import { todoItems, addItem, deleteItem, updateItem } from '../utills/apiRoutes';

const TodoPage = () => {
    const [todoItem, setInput] = useState("");
    const [items, setitems] = useState([]);
    const [isUpdate, setUpdate] = useState("");

    function sendTodoText(e) {
        if (isUpdate === "") {
            e.preventDefault();
            alert("Insert");
            const newItem = {
                todoItem
            }
            axios.post(addItem, newItem).then(() => {
                setInput("");
            }).catch((err) => {
                alert(err);
            })
        } else {
            axios.post(updateItem, { _id: isUpdate, todoItem }).then(() => {
                setInput("");
                setUpdate("");
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

    useEffect(() => {
        function getItems() {
            axios.get(todoItems).then((res) =>
                //console.log(res.data);
                setitems(res.data))
                .catch((err) => {
                    alert(err.message);
                })
        }
        getItems();
    }, [])

    //delete
    function deleteTodoItem(_id) {
        axios
            .delete(deleteItem + `${_id}`)
            .then((res) => {
                //console.log(res.data);
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
