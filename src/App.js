import React from 'react';
import {Switch, Route} from "react-router-dom"

import './App.css';


import Navbar from "./components/NavBar"
import Home from "./components/Home"
import Albums from "./components/Albums"
import AlbumInfo from "./components/AlbumContainer"

function App() {
  return (
    <div className="App">
      <Navbar id="nav-bar"/>
      <React.Fragment>
        <Switch className="total-with">
          <Route exact path="/" component={Home} />
          <Route exact path="/albums" component={Albums} />
          <Route exact path="/:albumid" component={AlbumInfo} />
        </Switch>
        </React.Fragment>
    </div>
  );
}

export default App;
