import React, { Component } from 'react';
import CallIcon from '@material-ui/icons/Call';
import { Link } from 'react-router-dom';

class InputUser extends Component {
  render() {
    return (

      <div className="chat-box bg-white">
        <div className="input-group">
          <span style={{marginTop:'5px', marginRight:'5px'}}>
            <Link to="/CallUser"><CallIcon /></Link>
          </span>
          <input ref="message" className="form-control border no-shadow no-rounded" style={{marginRight:'5px'}} placeholder="Gõ tin nhắn của bạn ở đây" onKeyUp={(e) => this.enterKey(e)} />
          <span className="input-group-btn" onClick={() => this.props.sendMessage(this.refs.message)}>
            <button className="btn btn-success no-rounded" type="button">Gửi</button>
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

export default InputUser;