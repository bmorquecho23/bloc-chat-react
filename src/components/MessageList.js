import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    }

    this.messagesRef = this.props.firebase.database().ref('messages');
  }

  componentDidMount() {
  this.messagesRef.on('child_added', snapshot => {
    const message = snapshot.val();
    message.key = snapshot.key;
    this.setState({ messages: this.state.messages.concat( message ) });
  });
}

  checkRoom(roomID){
    if (roomID === this.props.currentRoom){
      return true;
    }else{
      return false;
    }
  }


  render() {

    const {index,message}= this.props;

    return (
      <div>
        <h2 onClick={this.filterMessagesByRoom}>Current Room: {this.props.currentRoom}</h2>

        <ul>
          {this.state.messages.map( (message, index) =>
              <li className="messageName" key={index}>{ this.checkRoom(message.roomID) ? message.content : null }</li>
          )}
        </ul>
      </div>
    );
  }
}

export default MessageList;
