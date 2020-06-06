import React, { Component } from 'react';
import MessageItem from './messageItem.js'
class MessageList extends Component {
    render() {
        return (
            <div className="chat-message">
                 <ul className="chat">
                 {this.props.messages.map((item,index) =>
                    <MessageItem key={index} userName={item.userName} message={item.message} timeM={item.timeM}/>
                )}
                 </ul>
            </div>
        );
    }
}

export default MessageList;