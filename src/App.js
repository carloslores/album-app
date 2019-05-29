import React from 'react';
import {Switch, Route} from "react-router-dom"
import logo from './logo.svg';
import './App.css';

import Home from "./components/Home"
import Albums from "./components/Albums"
import AlbumInfo from "./components/AlbumContainer"

function App() {
  return (
    <div className="App">
    
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/albums" component={Albums} />
          <Route exact path="/:albumid" component={AlbumInfo} />
        </Switch>

    </div>
  );
}

export default App;
