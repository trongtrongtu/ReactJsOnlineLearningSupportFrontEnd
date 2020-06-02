import React, { Component } from 'react';
import MessageItem from './messageItem.js'
class MessageList extends Component {
    render() {
        return (
            
            <ul className="messages clo-md-5">
                {this.props.messages.map((item,index) =>
                    <MessageItem key={index} userName={item.userName} message={item.message} timeM={item.timeM}/>
                )}
            </ul>
            
        );
    }
}

export default MessageList;