import React, { useState } from 'react';

const EventHandling =() => {

    // let [heading, setHeading] = useState("Hello");

    let [isMouseOver, setMouseOver] = useState(false);


    // let setHeading1 = () => {
    //     setHeading("Submitted Munna");
    // }
    // let black = style.backgroundColor("black") 
    // let whote = style.backgroundColor("black") 

    let [ name, setName] = useState('');

    let [naam, updateNaam] =useState('');

    function setting(event) {
        updateNaam(name);
        event.preventDefault();
    }

    function h1bhaai(event) {
        setName(event.target.value);
    }


    function mouseOver () {
        setMouseOver(true);
    }

    function mouseOut () {
        setMouseOver(false);
    }
    
    
    return (

        <div>
            <form action="">
            <h1>Hello {naam}</h1>
            <input onChange={h1bhaai} type="text" placeholder="What's your name?" value={name} />
            <button type='submit' onMouseOver= {mouseOver} onMouseOut = {mouseOut} onClick={setting}
            style={{backgroundColor: isMouseOver ? "green" : "red" }} >Submit</button>
            </form>
        </div>
        // <div>
        //     <h1>Hello {name}</h1>
        //     <input onChange={h1bhaai} type="text" placeholder="What's your name?" value={name}/>
        //     <button onMouseOver= {mouseOver} onMouseOut = {mouseOut} 
        //     style={{backgroundColor: isMouseOver ? "green" : "red" }} >Submit</button>
        // </div>
        // <div>
        //     <h1>{heading}</h1>
        //     <input type="text" placeholder="What's your name?" />
        //     <button onMouseOver= {mouseOver} onMouseOut = {mouseOut} onClick={setHeading1}
        //     style={{backgroundColor: isMouseOver ? "green" : "red" }} >Submit</button>
        // </div>
    );
};

export default EventHandling;