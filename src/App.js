import React, { Component } from 'react';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';
import logo from './logo.svg';
import './App.css';


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBg7HF2S_hptTic2u_oV7Ow_JCncfyrJqA",
    authDomain: "bloc-chat-react-f4bee.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-f4bee.firebaseio.com",
    projectId: "bloc-chat-react-f4bee",
    storageBucket: "bloc-chat-react-f4bee.appspot.com",
    messagingSenderId: "708749678005"
  };
  firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRoom: '',
    }
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bloc Chat React</h1>
        </header>
        <main>
        </main>
        <RoomList
          firebase={firebase}
          />
      </div>
    );
  }
}

export default App;
