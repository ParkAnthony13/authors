import './App.css';
import React from 'react'
import {Router} from '@reach/router'

import Home from './components/Home'
import EditAuthor from './components/EditAuthor'
import NewAuthor from './components/NewAuthor'


function App() {
  return (
    <div className="App">
      <div>
        <h1>Favorite Authors</h1>
        <Router style={{display:"flex",justifyContent:"center"}}>
          <Home path="/"/>
          <EditAuthor path="/edit/:id" />
          <NewAuthor path="/new" />
        </Router>
      </div>
    </div>
  );
}

export default App;
