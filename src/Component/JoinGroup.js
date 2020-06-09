import React, { Component } from 'react';
import './createGroup.css';
import './createGroupJS.js';
import axios from 'axios';

const addRoomAction = (username, roomNameJoin, passwordRoom) => (axios.post('/join_room', { username, roomNameJoin, passwordRoom }).then((resp) => resp.data));
export default class JoinGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: sessionStorage.getItem('user_login'),
      roomNameJoin: '',
      passwordRoom: '',
      errors: ''
    }
  }
  isChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    console.log(name);
    console.log(value);
    this.setState({
      [name]: value
    });

  }
  handleOnClick = () => {
    console.log(JSON.stringify(this.state));


    addRoomAction(this.state.username, this.state.roomNameJoin, this.state.passwordRoom).then((respive) => {
      console.log(respive);
      if (respive.result === 'ok') {
        this.props.history.push('/Teams');
      } else if (!this.state.roomNameJoin || !this.state.passwordRoom){
        this.setState({ errors: 'Cần nhập đủ các trường' })
      } else if (respive.result === 'failed_joined') {
        this.setState({ errors: 'Bạn đã tham gia nhóm từ trước' })
      } else if (respive.result === 'failed_roomName') {
        this.setState({ errors: 'Tên nhóm không tồn tại' })
      } else if (respive.result === 'failed_password') {
        this.setState({ errors: 'Mật khẩu sai' })
      }

    })

  }
  render() {

    return (
      <form>
        <label>
          <p className="label-txt" style={{fontSize:'20px', fontWeight:'700'}}>Tên Nhóm: </p>
          <input onChange={(event) => this.isChange(event)} type="text" className="input" name="roomNameJoin" />
          <div className="line-box">
            <div className="line" />
          </div>
        </label>
        <label>
          <p className="label-txt" style={{fontSize:'20px', fontWeight:'700',marginTop:'15px'}}>Mật Khẩu: </p>
          <input onChange={(event) => this.isChange(event)} type="password" className="input" name="passwordRoom" />
          <div className="line-box">
            <div className="line" />
          </div>
        </label>
        <div style={{ color: "red", marginBottom:'20px' }}>{this.state.errors}</div>
        <button type="reset" onClick={() => this.handleOnClick()}>THAM GIA</button>
      </form>
    )
  }
}
