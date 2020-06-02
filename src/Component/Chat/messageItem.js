import React, { Component } from 'react';

class MessageItem extends Component {
    render() {
        return (
            <li className={this.props.user? "message right appeared": "message left appeared"}>
                <div className="avatar"></div>
                <div className="text_wrapper">
                    
        <div className="text"><b>{this.props.userName}</b><br></br>{this.props.timeM}<br></br>{this.props.message}</div>
                </div>
            </li>
        );
    }
}

export default MessageItem;