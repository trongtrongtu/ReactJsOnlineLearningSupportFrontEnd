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
        const styles = {
            li: {
                width: '17%',
                height: '180px',
                backgroundColor: '#8cacea',
                margin: '20px',

            },
            text: {
                paddingTop: '110px',
                textAlign: 'center',
                borderRadius: '2px',
                paddingLeft: '20px',
                paddingRight: '20px',
            }
        }
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
                            <span style={{ border: 'sol' }}>
                                {item.roomNameJoin}
                            </span>
                        ))}
                    </div>
                    <span style={{ display: 'flex', marginLeft: '100px', flexWrap: 'wrap' }}>
                        <span style={styles.li}>
                            <span style={{paddingLeft:'30%', paddingRight:'30%'}}>
                                <img src={"image/room.jpeg"} alt="" />
                            </span>
                            <span style={styles.text}>
                                parent element
                            </span>
                        </span>
                        <span style={styles.li}>first child element</span>
                        <span style={styles.li}>second child element</span>
                        <span style={styles.li}>parent element </span>
                        <span style={styles.li}>first child element</span>
                        <span style={styles.li}>second child element</span>
                        <span style={styles.li}>parent element </span>
                        <span style={styles.li}>first child element</span>
                        <span style={styles.li}>second child element</span>
                        <span style={styles.li}>parent element </span>
                        <span style={styles.li}>first child element</span>
                        <span style={styles.li}>second child element</span>
                        <span style={styles.li}>parent element </span>
                        <span style={styles.li}>first child element</span>
                        <span style={styles.li}>second child element</span>
                        <span style={styles.li}>parent element </span>
                        <span style={styles.li}>first child element</span>
                        <span style={styles.li}>second child element</span>
                    </span>
                </div>
            </React.Fragment>

        );
    }
}
