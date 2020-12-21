import React from 'react';
import { Link } from 'react-router-dom';

export default function FolderItem(props) {
  return (
    <li className='FolderItem'>
      <Link to={`/folder/${props.id}`}>
        {props.name}
      </Link>
    </li>
  )
}

FolderItem.defaultProps = {
  
}
