import React, { useState } from 'react';

const Input2 =() => {

    let [fullName, setFullName] = useState(
        {fName: '',
        lName: ''}
        );

    function fullNaam(event) {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        
        setFullName(prevValue => {
            if (inputName === 'fName'){
                return{
                fName : inputValue,
                lName : prevValue.lName}

            } else if (inputName === 'lName') {

                return{
                fName : prevValue.fName,
                lName : inputValue}
            }
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(fullName, "Submitted");
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
            <h1>Hello {fullName.fName} {fullName.lName}</h1>
            <input 
            name='fName'
            type="text" 
            placeholder='Aapka Naam' 
            onChange={fullNaam} 
            value={fullName.fName}
            />
            <input 
            name='lName'
            type="text" 
            placeholder='Aapka Surname' 
            onChange={fullNaam} 
            spellCheck = 'false'
            value={fullName.lName}
            />
            <button type="submit">Submit</button></form>
        </div>
    );
};

export default Input2;