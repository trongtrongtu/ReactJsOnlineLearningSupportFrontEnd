import React, { Component } from 'react'
import Team from "./team";
import { Link } from 'react-router-dom';
import { TeamConsumer } from './Context';
import { listAllRoomWithUser } from '../User/UserFunction'
import { Button } from '@material-ui/core';
import Search from '../UI/Search' ;
export default class ListTeams extends Component {
    // Lay ra noi dung search
    getTextSearch =(data) =>{
    
        this.setState({
            searchText : data.toLowerCase() ,
        });
        console.log(this.state.searchText)
    }
    //=======================================
    constructor(props) {
        super(props);
        this.state = {
            username: sessionStorage.getItem('user_login'),
            room: [

            ],
            searchText:''
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
        // Lay ra danh sach room
        var ketQua=[] ;
        this.state.room.forEach((item) =>{
            var roomName = item.roomNameJoin.toLowerCase() ;
            
            if(roomName.indexOf(this.state.searchText) !== -1){
                ketQua.push(item) ;
            }
            console.log(ketQua) ;
        })
        return (
            <div>
            <Search checkConnectSearch ={ (data) => this.getTextSearch(data)} ></Search>
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12" style={{ textAlign: "center", fontSize: "35px", fontWeight: 500 }}><p>Nhóm</p></div>
                            <Link to="/createGroup">
                                <button className="btn-sm btn-primary" style={{ position: "absolute", right: "10px", marginRight: '140px' }}>Tạo Nhóm</button>
                            </Link>

                            <Link to="/joinGroup">
                                <button className="btn-sm btn-primary" style={{ position: "absolute", right: "20px" }}>Tham Gia Nhóm</button>
                            </Link>
                        </div>
                    </div>
                    <div style={{ marginTop: '80px' }}>
                        <span style={{ display: 'flex', marginLeft: '100px', flexWrap: 'wrap' }}>
                            {ketQua.map((item, i) => (
                                <span style={styles.li}>
                                    <span style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                                        <img src={"image/room.jpeg"} alt="" />
                                    </span>
                                    <span style={styles.text}>
                                        <Link to="/Chat" onClick={() => {sessionStorage.setItem('room',item.roomNameJoin)}}>
                                            <p style={{ fontWeight: 500, fontSize: '18px' }}>
                                                {item.roomNameJoin}
                                            </p>
                                        </Link>
                                    </span>
                                </span>
                            ))}
                        </span>
                    </div>
                </div>
            </React.Fragment >
                                </div>
        );
    }
}
