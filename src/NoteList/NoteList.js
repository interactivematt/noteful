import React, { Component } from 'react';
import STORE from '../STORE';
import NoteItem from '../NoteItem/NoteItem.js'

class Notes extends Component{
  render(){
    const notes = STORE.notes
    return(
      <main>
        {notes.map(note =>
          <NoteItem
            key={note.id}
            {...note}
          />
        )}
      </main>
    )
  }
}

export default Notes