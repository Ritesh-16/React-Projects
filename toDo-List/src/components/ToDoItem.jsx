import React from 'react';
import ToDO from './ToDO';
import { useState } from 'react';

const ToDoItem =(props) => {

    
    return (
        <li 
        onClick={() => {props.checked(props.id)}}
        key={props.index}>{props.item}</li>
    );
};

export default ToDoItem;