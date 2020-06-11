import React, { Component } from 'react';
import './createGroup.css';
import './createGroupJS.js';
import axios from 'axios';

const addRoomAction = (username, roomNameCreate, passwordRoom) => (axios.post('/create_room', { username, roomNameCreate, passwordRoom }).then((resp) => resp.data));
export default class createGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: sessionStorage.getItem('user_login'),
      roomNameCreate: '',
      passwordRoom: '',
      passwordRoom_1: '',
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
    if (!this.state.roomNameCreate || !this.state.passwordRoom || !this.state.passwordRoom_1) {
      this.setState({ errors: 'Cần nhập đủ các trường' })
    } else {
      if (this.state.passwordRoom === this.state.passwordRoom_1) {
        addRoomAction(this.state.username, this.state.roomNameCreate, this.state.passwordRoom).then((respive) => {
          console.log(respive);
          if (respive.result === 'ok') {
            this.props.history.push('/Teams');
          } else if (respive.result == 'failed') {
            this.setState({ errors: 'Tên nhóm đã tồn tại' })
          }
        })
      } else {
        this.setState({ errors: "Mật khẩu không khớp" });
      }
    }
  }
  render() {

    return (
      <form>
        <label>
          <p className="label-txt" style={{ fontSize: '20px', fontWeight: '700' }}>Tên Nhóm: </p>
          <input onChange={(event) => this.isChange(event)} type="text" className="input" name="roomNameCreate" />
          <div className="line-box">
            <div className="line" />
          </div>
        </label>
        <label>
          <p className="label-txt" style={{ fontSize: '20px', fontWeight: '700', marginTop: '15px' }}>Mật Khẩu: </p>
          <input onChange={(event) => this.isChange(event)} type="password" className="input" name="passwordRoom" />
          <div className="line-box">
            <div className="line" />
          </div>
        </label>
        <label>
          <p className="label-txt" style={{ fontSize: '20px', fontWeight: '700', marginTop: '15px' }}>Nhâp Lại Mật Khẩu: </p>
          <input onChange={(event) => this.isChange(event)} type="password" className="input" name="passwordRoom_1" />
          <div className="line-box">
            <div className="line" />
          </div>
        </label>
        <div style={{ color: "red", marginBottom: '20px' }}>{this.state.errors}</div>
        <button type="reset" onClick={() => this.handleOnClick()}>TẠO</button>
      </form>
    )
  }
}
