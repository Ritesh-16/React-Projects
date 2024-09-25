import React, { useState } from 'react';

const EventPractice =() => {

    let [contact, setContact] = useState(
        {
            fName:'',
            surName:'',
            email:''
        }
    );

    function Contact(event){

        
        let {name, value} = event.target;

        console.log(name);
        console.log(value);

        setContact(prevValue => {
                return {
                    ...prevValue,
                    [name]:value
                }
    })
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log('Form submitted');
    }
    return (
        <div>
            <h1>{contact.fName} {contact.surName}</h1>
            <p>{contact.email}</p>
            <form action="" onSubmit={handleSubmit}>
            <input name= 'fName' type="text" onChange={Contact} value={contact.fName}/>
            <input name= 'surName' type="text" onChange={Contact} value={contact.surName}/>
            <input name= 'email' type="text" onChange={Contact} value={contact.email}/>
            <button>Submit</button>
            </form>
        </div>
    );
};

export default EventPractice;