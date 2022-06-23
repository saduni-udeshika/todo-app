import { useState, useEffect } from 'react';
import axios from "axios";
import ListItems from '../components/ListItem/ListItem';
import { todoItems, addItem, deleteItem } from '../utills/apiRoutes';

const TodoPage = () => {
    const [input, setInput] = useState("");
    const [items, setitems] = useState([]);

    function sendTodoText(e) {
        e.preventDefault();
        alert("Insert");
        const newItem = {
            input
        }
        //console.log(newItem);
        axios.post(addItem, newItem).then(() => {
            setInput("");
        }).catch((err) => {
            alert(err);
        })
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
    }, [items])

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
            <form onSubmit={sendTodoText}>
                <div className='container-top'>
                    <input type="text" placeholder='Type something....' value={input} onChange={(e) => {
                        setInput(e.target.value);
                    }} />
                    <button type="submit" className='add'>Add</button>
                </div>
            </form>
            {items.map((item) =>
                <div className='container-icons' key={item._id}>
                    <ListItems todoItem={item.todoItem}
                        remove={() => deleteTodoItem(item._id)} />
                </div>
            )}
        </div>
    )
}

export default TodoPage;
