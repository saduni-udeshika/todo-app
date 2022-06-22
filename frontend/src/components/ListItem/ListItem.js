import "./listItem.css";
import React from 'react';
import { MdEdit, MdDelete } from "react-icons/md";

export default function ListItem({ text, edit, remove }) {
    return (
        <div>
            <div className='item'>
                <div className='text'>
                    {text}
                </div>
                <div className='icons'>
                    <i onClick={edit}> <MdEdit /> </i>
                    <i onClick={remove}> <MdDelete /> </i>
                </div>
            </div>
        </div>
    )
}

