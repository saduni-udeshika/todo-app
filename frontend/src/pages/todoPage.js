import React from 'react';
import ListItems from '../components/ListItem/ListItem';

const TodoPage = () => {
    return (
        <div className='container'>
            <h1>Todo App</h1>
            <div className='container-top'>
                <input type="text" placeholder='Type something....' />
                <div className='add'>Add</div>
            </div>
            <div className='container-icons'>
                <ListItems />
            </div>
        </div>
    )
}

export default TodoPage;
