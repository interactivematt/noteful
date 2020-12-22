import React, { Component } from 'react';
import FolderItem from '../FolderItem/FolderItem';
import STORE from '../STORE';

class FolderPage extends Component{

  render(){
    const folders = STORE.folders

    return(
        <a href="/">Go Back</a>
    )
  }
}

export default FolderPage