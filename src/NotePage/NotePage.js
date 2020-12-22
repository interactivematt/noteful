import React from 'react';
import STORE from '../STORE';

export default function NotePage(props) {
  const notes = STORE.notes
  
  const note = notes.find(p =>
    p.id === props.match.params.noteId
  )
  
  return (
      <article className='Note'>
        <h2>{note.name}</h2>
        <p>{note.content}</p>
      </article>
  )
}
