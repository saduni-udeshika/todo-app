import { useState } from 'react';
import axios from "axios";
import ListItems from '../components/ListItem/ListItem';
import { addItem } from '../utills/apiRoutes'

const TodoPage = () => {
    const [input, setInput] = useState("");
    function sendTodoData(e) {
        e.preventDefault();
        const newItem = {
            input
        };

        axios
            .post(addItem, newItem)
            .then(() => {
                setInput("");
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <div className='container'>
            <h1>Todo App</h1>
            <form onSubmit={sendTodoData}>
                <div className='container-top'>
                    <input type="text" placeholder='Type something....' value={input} onChange={(e) => setInput(e.target.value)} />
                    <button type="submit" className='add'>Add</button>
                </div>
            </form>
            <div className='container-icons'>
                <ListItems />
            </div>
        </div>
    )
}

export default TodoPage;
