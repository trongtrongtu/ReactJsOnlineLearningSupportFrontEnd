import React, { Component } from 'react';
import MessageItemUser from './messageItemUser.js'
class MessageListUser extends Component {
    render() {
        return (
            <div className="chat-message">
                 <ul className="chat">
                 {this.props.messages.map((item,index) =>
                    <MessageItemUser key={index} userName={item.userName} message={item.message} timeM={item.timeM} usernamefriend={item.usernamefriend}/>
                )}
                 </ul>
            </div>
        );
    }
}

export default MessageListUser;