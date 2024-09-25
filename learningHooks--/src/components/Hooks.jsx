import React from 'react';

const Hooks =() => {

    function strike(){
        document.getElementById("root").style.textDecoration="line-through";
    }
    function unStrike(){
        document.getElementById("root").style.textDecoration=null;
    }
    // let strikeThrough = document.getElementById("root").style.textDecoration:"line-through";
    // style={rit && {textDecoration:"line-through"}}
    var rit = false;
    return (
        <div>
            <p >Buy dudu for me</p>
            <button onClick={strike}>Strike</button>

            <button onClick={unStrike}>unStrike</button>
            
        </div>
    );
};

export default Hooks;
