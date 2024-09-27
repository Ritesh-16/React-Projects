import { useState } from 'react'
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Note from "./components/Note.jsx"
import CreateArea from './components/CreateArea.jsx'

import './App.css'

function App() {

  let [newNotes, setNewNotes] = useState([]);
  function clickAdd(note) {
    setNewNotes(prevNotes => {
      return [...prevNotes, note];
    })
  }
 
  function deleteNote(id) {
    setNewNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id
        });
    });


  }

  return (
    <>
        <Header />
        <CreateArea onAdd={clickAdd} />

        {newNotes.length > 0 ? 
        (newNotes.map((noteItem, index) => (
           <Note key ={index} 
           id={index}
           title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
        )) 
    ) : ( 
  <p>No notes yet</p>)}
          
        
        
        <Footer />
    </>
  )
}

export default App;
