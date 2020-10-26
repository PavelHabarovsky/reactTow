import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';



function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar appState={props.state}/>
        <div className="app_wrapper_content">
          <Route path="/profile" render={() => <Profile appState={props.state}/>}/>
          <Route path="/dialog" render={() => <Dialogs appState={props.state}/>}/>
         
          
        </div>


      </div>
    </BrowserRouter>

  );
}

export default App;
