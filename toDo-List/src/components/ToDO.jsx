import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDO = () => {
    let [item, setItem] = useState([]);  // Initialize as an array
    let [newItem, setNewItem] = useState('');

    function updateItem() {
        setItem((prevItems) => [...prevItems, newItem]); // Add newItem to the array
        setNewItem(''); // Clear the input field
    }

    function handleClick(event) {
        event.preventDefault();
        setNewItem(event.target.value); // Set the value of newItem
    }

    function deleteItem(id){

        setItem((prevItems) => {
            return prevItems.filter((item, index) => {
                
                return index !== id; 
        })
        })

    }

    return (
        <div className='container'>
            <div className="heading">
                <h1>ToDo List</h1>
            </div>
            <div className="form">
                <input 
                    type="text" 
                    value={newItem} 
                    placeholder="Add your ToDo's" 
                    onChange={handleClick}
                />
                <button onClick={updateItem}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {item.map((item, index) => (
                        <ToDoItem key={index} item={item} id={index} index={index} checked={deleteItem} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ToDO;
