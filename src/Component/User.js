import React, { Component } from 'react'
import Team from "./team";
import { Link } from 'react-router-dom';
import { TeamConsumer } from './Context';
import { list_all_users } from '../User/UserFunction'
import { Button } from '@material-ui/core';

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: sessionStorage.getItem('user_login'),
            listUser: []
        }
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        list_all_users().then((userFromServer) => {
            for (let i = 0; i < userFromServer.length; i++) {
                this.state.listUser.push({
                    username: userFromServer[i].username
                })
            }
            this.setState({
                listUser: this.state.listUser
            })
        }).catch((error) => {
            console.error(error);
        });
    }
    render() {
        const styles = {
            li: {
                width: '17%',
                height: '200px',
                backgroundColor: '#8cacea',
                margin: '20px',
                borderRadius:'5px'

            },
            text: {
                textAlign: 'center',
                paddingLeft: '20px',
                paddingRight: '20px',
            }
        }
        return (
            <React.Fragment>
                <div className="py-5">
                <div className="col-lg-12" style={{ textAlign: "center", fontSize: "35px", fontWeight: 500 }}><p>Bạn Bè</p></div>
                    <div style={{ marginTop: '80px' }}>
                        <span style={{ display: 'flex', marginLeft: '100px', flexWrap: 'wrap' }}>
                            {this.state.listUser.map((item, i) => (
                                <span style={styles.li}>
                                    <span style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                                        <img src={"image/room.jpeg"} alt="" />
                                    </span>
                                    <span style={styles.text}>
                                        <Link to="/ChatUser" onClick={() => {sessionStorage.setItem('user_friend',item.username)}}>
                                            <p style={{ fontWeight: 500, fontSize: '18px' }}>
                                                {item.username}
                                            </p>
                                        </Link>
                                    </span>
                                </span>
                            ))}
                        </span>
                    </div>
                </div>
            </React.Fragment >

        );
    }
}
