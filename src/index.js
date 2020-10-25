import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
  {id: 1, name: "Damach"},
  {id: 2, name: "Andrey"},
  {id: 3, name: "Sveta"},
  {id: 4, name: "Sasha"},
  {id: 5, name: "Vasya"},
  {id: 6, name: "Voava"}

];

let messagesData = [
  {id: 1, message: "Hi"},
  {id: 2, message: "I`m a hero"},
  {id: 3, message: "What a fack"},
];
let postsData = [
  { id: 1, message: "Hi! How are you?", likeCount: 15 },
  { id: 2, message: "I`m fine", likeCount: 48 },
  { id: 3, message: "I read the book", likeCount: 21 },
  { id: 4, message: "Yo", likeCount: 8 },
];


ReactDOM.render(
  <React.StrictMode>
    <App 
    dialogsData={dialogsData} 
    messagesData={messagesData} 
    postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
