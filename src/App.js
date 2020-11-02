import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from './components/Profile/Profile';
import {addPost} from './redux/state';
import {onUserText} from './redux/state';

import { Route } from 'react-router-dom';



function App(props) {
  console.log(props.state.postsPage.currentUserText)

  return (
    
      <div className="app-wrapper">
        
        <Header />
        <Navbar appState={props.state}/>
        <div className="app_wrapper_content">
          <Route path="/profile" render={() => <Profile appState={props.state} addPost={addPost} onUserText={onUserText} />} />
          <Route path="/dialog" render={() => <Dialogs appState={props.state}/>}/> 
        </div>


      </div>

  );
}

export default App;
