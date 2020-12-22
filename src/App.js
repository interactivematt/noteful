import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import FolderList from './FolderList/FolderList';
import FolderPage from './FolderPage/FolderPage';
import FolderNote from './FolderNote/FolderNote';
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
        <div className='container'>
          <aside className="sidebar">
            <Route 
            exact path='/'
            folders={ folders }
            component={FolderList}
            />
            <Route
              path='/folder/:folderId'
              folders={ folders }
              component={FolderPage}
            />
            <Route 
              path='/note/:noteId'
              folders={ folders }
              component={FolderNote}
            />
          </aside>
          <main className="main">
            <Route 
              exact path='/'
              component={Notes}
            />
            <Route
              path='/note/:noteId'
              notes={ notes }
              component={NotePage}
            />
          </main>
        </div>
        
      </>
    )
  }
}


export default App;