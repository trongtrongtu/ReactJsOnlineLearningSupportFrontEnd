import React, { Component } from 'react';
import MessageItem from './messageItem.js';
import $ from 'jquery';
class MessageList extends Component {
    render() {
        let objMessage = $("ul");
       
        objMessage.scrollTop(100000);
        return (
            <div className="chat-message">
                 <ul className="chat">
                 {this.props.messages.map((item,index) =>
                    <MessageItem key={index} userName={item.userName} message={item.message} timeM={item.timeM} roomName={item.roomName}/>
                )}
                 </ul>
            </div>
        );
    }
}

export default MessageList;