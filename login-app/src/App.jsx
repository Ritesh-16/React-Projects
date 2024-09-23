import { useState } from 'react'
import './App.css'
import LogOut from './components/Logout';
import Login from './components/Login';


let LoggedIn = true;

function App() {
  

  return <div className="container">{
    <LogOut isRegistered = {LoggedIn}/>
      // LoggedIn === true ? <Login /> : <LogOut />
  }
  </div>

  
}

export default App
