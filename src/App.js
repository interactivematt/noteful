import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import FolderList from './FolderList/FolderList';
import Notes from './NoteList/NoteList';
import NotePage from './NotePage/NotePage';

class App extends Component {
  state = {
    folders: [],
    notes: []
  }
  
  render() {
    const { folders } = this.state.folders
    const { notes } = this.state.notes
    console.log(folders)
    return (
      <>
        <Header></Header>
        <div className="Sidebar">
          <FolderList 
           exact path='/'
           folders={ folders }
           />
        </div>
        <div className="Main">
          <Route 
            exact path='/'
            component={Notes}
          />
          <Route
            path='/note/:noteId'
            notes={ notes }
            component={NotePage}
          />
        </div>
      </>
    )
  }
}


export default App;