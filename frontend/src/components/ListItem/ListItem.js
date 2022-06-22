import "./listItem.css";
import React from 'react';
import { MdEdit, MdDelete } from "react-icons/md";

const ListItems = () => {
    return (
        <div className='item'>
            <div className='text'>
                Buy fruits
            </div>
            <div className='icons'>
                <i> <MdEdit /> </i>
                <i> <MdDelete /> </i>
            </div>
        </div>
    )
}

export default ListItems;
