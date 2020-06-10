
import $ from 'jquery';
import Input from './input';
import _map from 'lodash/map';
import io from 'socket.io-client';
import React, { Component } from 'react';
import MessageListUser from './messageListUser';
import OnlineList from './online-list';
import Rooms from './rooms';
import './chat.css';
import { listMessageWithRoom } from '../../User/UserFunction';


class chatUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [], // danh sách tin nhắn
            user: { id: '', name: sessionStorage.getItem('user_login') },// người dùng hiện tại, nếu rỗng sẽ hiển thị form login, có sẽ hiển thị phòng chat
            usernamefriend: sessionStorage.getItem('user_friend')
        }
        this.socket = null;
    }
    componentWillMount() {
        this.socket = io('localhost:3001');
        this.socket.on('newMessageFriend', (response) => { this.newMessage(response) }); //lắng nghe khi có tin nhắn mới

        
    }
    //Khi có tin nhắn mới, sẽ push tin nhắn vào state mesgages, và nó sẽ được render ra màn hình
    newMessage(m) {
        const messages = this.state.messages;
        let ids = _map(messages, 'id');
        let max = Math.max(...ids);

        messages.push({
            message: m.data,
            userName: m.user.name,
            timeM: m.timeM,
            usernamefriend: m.usernamefriend
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
            this.socket.emit("newMessageFriend", { data: m.value, user: this.state.user, timeM: timeM, usernamefriend: this.state.usernamefriend }); //gửi event về server
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
                <div><h2 style={{ textAlign: 'center' }} > Bạn: {this.state.usernamefriend}</h2> </div>
                <div className="container bootstrap snippet" >

                    <div className="row">
                        {/* Danh sach online*/}

                        {/* selected chat*/}
                        <div className="col-md-8 bg-white">
                            <MessageListUser messages={this.state.messages} user={this.state.user} typing={this.state.typing} ></MessageListUser>
                            <Input sendMessage={this.sendnewMessage.bind(this)} ></Input>
                        </div>


                    </div>
                </div>
            </div>


        )
    }
}

export default chatUser;