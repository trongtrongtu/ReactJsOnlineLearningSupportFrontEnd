
import $ from 'jquery';
import Input from './input';
import _map from 'lodash/map';
import io from 'socket.io-client';
import React, { Component } from 'react';
import MessageList from './messageList';
import OnlineList from './online-list';
import Rooms from './rooms';
import './chat.css';


class chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [], // danh sách tin nhắn
      user: { id: '', name: sessionStorage.getItem('user_login') },// người dùng hiện tại, nếu rỗng sẽ hiển thị form login, có sẽ hiển thị phòng chat
      userOnline: [], // danh sách người dùng đang online
      room: { userName: sessionStorage.getItem('user_login'), roomName: sessionStorage.getItem('room'), passRoom: '@' } // room hien tai

    }
    this.socket = null;
  }
  componentWillMount() {
    console.log(this.state.user)
    this.socket = io('localhost:3001');
    this.socket.on('newMessage', (response) => { this.newMessage(response) }); //lắng nghe khi có tin nhắn mới
    this.socket.on('loginFail', (response) => { alert('Tên đã có người sử dụng') }); //login fail
    this.socket.on('loginSuccess', (response) => { this.setState({ user: { id: this.socket.id, name: response.data }, messages: response.messages }) }); //đăng nhập thành công 
    this.socket.on('updateUesrList', (response) => { this.setState({ userOnline: response }) }); //update lại danh sách người dùng online khi có người đăng nhập hoặc đăng xuất
  }
  //Khi có tin nhắn mới, sẽ push tin nhắn vào state mesgages, và nó sẽ được render ra màn hình
  newMessage(m) {
    const messages = this.state.messages;
    let ids = _map(messages, 'id');
    let max = Math.max(...ids);

    messages.push({
      id: max + 1,
      userId: m.user.id,
      message: m.data,
      userName: m.user.name,
      timeM: m.timeM,
      roomName: m.roomName
    });


    let objMessage = $('.chat-message');
    if (objMessage[0].scrollHeight - objMessage[0].scrollTop === objMessage[0].clientHeight) {
      this.setState({ messages });
      objMessage.animate({ scrollTop: objMessage.prop('scrollHeight') }, 1000); //tạo hiệu ứng cuộn khi có tin nhắn mới

    } else {
      this.setState({ messages });
      if (m.id === this.state.user) {
        objMessage.animate({ scrollTop: objMessage.prop('scrollHeight') }, 1000);
      }
    }

  }

  //Gửi event socket newMessage với dữ liệu là nội dung tin nhắn và người gửi
  sendnewMessage(m) {
    if (m.value) {
      let today = new Date();
      let timeM = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "   " + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
      this.socket.emit("newMessage", { data: m.value, user: this.state.user, timeM: timeM, roomName: this.state.room.roomName }); //gửi event về server
      m.value = "";
    }
  }
  //login để định danh người dùng
  login() {

    this.socket.emit("login", this.refs.name.value);

  }

  join_room() {
    this.socket.emit("join-room", { roomName: this.refs.room_name.value, passRoom: this.refs.passRoom, user: this.state.user });
  }

  render() {
    return (
      <div className="app__content">

        { /* kiểm tra xem user đã tồn tại hay chưa, nếu tồn tại thì render form chat, chưa thì render form login */}
        <div><h2 style={{ textAlign: 'center' }} > Room:{this.state.room.roomName}</h2> </div>
        <div className="container bootstrap snippet" >

          <div className="row">
            {/* Danh sach online*/}
            <OnlineList userOnline={this.state.userOnline} ></OnlineList>

            {/* selected chat*/}
            <div className="col-md-8 bg-white">
              <MessageList messages={this.state.messages} user={this.state.user} typing={this.state.typing} ></MessageList>
              <Input sendMessage={this.sendnewMessage.bind(this)} ></Input>
            </div>


          </div>
        </div>
      </div>


    )
  }
}

export default chat;