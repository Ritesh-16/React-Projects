import React, { useState } from 'react';

const GetTime =() => {

    let getTime = new Date().toLocaleTimeString();
    // console.log(getTime);

    let [time, setState] = useState(getTime);

    let gettingTime =() => {
        setState( new Date().toLocaleTimeString());
    }
    // setInterval(gettingTime,1000);
    return (
        <div>
            <p>{time}</p>
            <button onClick={gettingTime}>Up Time</button>
        </div>
    );
};

export default GetTime;