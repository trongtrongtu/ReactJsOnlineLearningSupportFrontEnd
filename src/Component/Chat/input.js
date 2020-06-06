import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            
      <div className="chat-box bg-white">
      <div className="input-group">
        <input ref="message" className="form-control border no-shadow no-rounded" placeholder="Type your message here" onKeyUp={(e) => this.enterKey(e)} />
        <span className="input-group-btn"  onClick={() => this.props.sendMessage(this.refs.message)}>
          <button className="btn btn-success no-rounded" type="button">Send</button>
        </span>
      </div>{/* /input-group */}	
    </div>
        );
    }
    enterKey(e) {
        if (e.keyCode === 13) {
            this.props.sendMessage(this.refs.message);
        }
    }
}

export default Input;