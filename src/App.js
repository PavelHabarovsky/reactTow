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
        <Navbar />
        <div className="app_wrapper_content">
          <Route path="/profile" render={() => <Profile postsData={props.postsData}/>}/>
          <Route path="/dialog" render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
         
          
        </div>


      </div>
    </BrowserRouter>

  );
}

export default App;
