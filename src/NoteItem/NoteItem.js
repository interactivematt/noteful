import React from 'react';
import { Link } from 'react-router-dom';

export default function NoteItem(props) {
  return (
    <li className='NoteItem'>
      <Link to={`/note/${props.id}`}>
        {props.name}
      </Link>
    </li>
  )
}
