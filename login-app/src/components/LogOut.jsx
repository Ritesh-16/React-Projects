import React from "react";
import Input from "./Input";



function LogOut(props){
    return(
        <form className="form">
            <Input type="text" placeholder="Username" />
            <Input type="Password" placeholder="Password" />
            {props.isRegistered  && <Input type="Password" placeholder="Confirm Password" />}
            

            <button type="submit">
                {props.isRegistered ? "Register" : "Login"}
            </button>
        </form>
    )
}

export default LogOut;