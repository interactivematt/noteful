import React, { Component } from 'react';
import FolderItem from '../FolderItem/FolderItem';
import STORE from '../STORE';

class FolderList extends Component{

  render(){
    const folders = STORE.folders

    return(
      <aside>
        <ul className='BookmarkList__list' aria-live='polite'>
          {folders.map(folder =>
              <FolderItem
                key={folder.id}
                {...folder}
              />
            )}
        </ul>
      </aside>
    )
  }
}

export default FolderList