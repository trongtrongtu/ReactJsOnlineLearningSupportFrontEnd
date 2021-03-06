import React, { Component } from 'react';
import MessageItemUser from './messageItemUser.js';
import $ from 'jquery';

class MessageListUser extends Component {
    render() {
        let objMessage = $("ul");
       
        objMessage.scrollTop(100000);
        return (
            <div className="chat-message">
                 <ul className="chat" style={{height:'680px'}}>
                 {this.props.messages.map((item,index) =>
                    <MessageItemUser key={index} userName={item.userName} message={item.message} timeM={item.timeM} usernamefriend={item.usernamefriend}/>
                )}
                 </ul>
            </div>
        );
    }
}

export default MessageListUser;