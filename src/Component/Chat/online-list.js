import React, { Component } from 'react';

class OnlineList extends Component {
    render() {
        return (
            <ul className="messages">
                {this.props.messages.map(item =>
                    <li><span>{item}</span></li>
                )}
            </ul>
        );
    }
}

export default OnlineList