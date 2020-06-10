import React, { Component } from 'react';

class MessageItemUser extends Component {
  render() {
    
    if (this.props.usernamefriend == sessionStorage.getItem('user_friend') || this.props.usernamefriend == sessionStorage.getItem('user_login')) {
      return (
        <li className={this.props.user ? "left clearfix" : "right clearfix"}>
          <span className="chat-img pull-left">
            <img src="https://bootdey.com/img/Content/user_3.jpg" alt="User Avatar" />
          </span>
          <div className="chat-body clearfix">
            <div className="header">
              <strong className="primary-font">{this.props.userName}</strong>
              <small className="pull-right text-muted"><i className="fa fa-clock-o" /> {this.props.timeM}</small>
            </div>
            <p>
              {this.props.message}
            </p>
          </div>
        </li>

      );
    } else {
      return(<div></div>);
    }
  }
}

export default MessageItemUser;