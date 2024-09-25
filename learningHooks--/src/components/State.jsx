import React, { useState } from 'react';

const State =() => {
    let [count,setCount] = useState(0);

    function counting () {
        setCount(count +1);
    }

    function decounting () {
        setCount(count -1);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={counting}>+</button>
            <button onClick={decounting}>-</button>

        </div>
    );
};

export default State;