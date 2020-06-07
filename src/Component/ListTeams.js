import React, { Component } from 'react'
import Team from "./team";
import { Link } from 'react-router-dom';
import { TeamConsumer } from './Context';
import { listAllRoomWithUser } from '../User/UserFunction'

export default class ListTeams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: sessionStorage.getItem('user_login'),
            room: [
                
            ]
        }
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        listAllRoomWithUser(sessionStorage.getItem('user_login')).then((roomFromServer) => {
            for (let i = 0; i < roomFromServer.length; i++) {
                this.state.room.push({
                    roomNameJoin: roomFromServer[i].roomNameJoin
                })
            }
            this.setState({
                room: this.state.room
            })
        }).catch((error) => {
            console.error(error);
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12" style={{ textAlign: "center", fontFamily: "pacifico", fontSize: "29px" }}>Your Team</div>
                            <Link to="/createGroup">
                                <button className="btn-sm btn-primary" style={{ position: "absolute", right: "50px" }}>Create Group</button>
                            </Link>

                            <Link to="/joinGroup">
                                <button className="btn-sm btn-primary" style={{ position: "absolute", right: "50px", marginTop: "50px" }}>Join Group</button>
                            </Link>
                        </div>
                        {this.state.room.map((item, i) => (             
                                <span>{item.roomNameJoin}</span>
                        ))}
                    </div>
                </div>
            </React.Fragment>

        );
    }
}
