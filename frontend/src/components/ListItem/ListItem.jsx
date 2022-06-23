import "./listItem.css";
import React from 'react';
import { MdEdit, MdDelete } from "react-icons/md";

const ListItem = ({ todoItem, remove, update }) => {
    return (
        <div className='item'>
            <div className='text'>
                {todoItem}
            </div>
            <div className='icons'>
                <i onClick={update}> <MdEdit /> </i>
                <i onClick={remove}> <MdDelete /> </i>
            </div>
        </div>
    )
}

export default ListItem;


