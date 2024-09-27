import React, { useState } from 'react';

const CreateArea =(props) => {

    let [note, setNote] = useState({
        title: '',
        content: ''
    });

    function handleChange(event) {

        let {name, value} = event.target;
        setNote(prevItems => {
            return {...prevItems,
                [name]: value }
            });
    }

    function handleClick(event) {
        
        event.preventDefault();
        props.onAdd(note)
        setNote({
            title: '',
            content: ''
        })
    }


    return (
        <div >
            <form action="">
            <input type="text" 
            placeholder='Title'
            name='title'
            onChange={handleChange}
            value={note.title}
            />
            <textarea 
            name="content" 
            rows='3'
            placeholder='your content'
            onChange={handleChange}
            value={note.content}
            ></textarea>
            <button onClick={handleClick} >Add</button>
            </form>
        </div>
    );
};

export default CreateArea;