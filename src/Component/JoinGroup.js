import React, { Component } from 'react';
import './createGroup.css';
import './createGroupJS.js';
import axios from 'axios' ;

const addRoomAction =(username,roomNameJoin,passwordRoom)=>(axios.post('/join_room',{username,roomNameJoin,passwordRoom}).then((resp)=>resp.data));
export default class JoinGroup extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'tuanla99',
      roomNameJoin: '',
      passwordRoom:''
     
    }
  }
  isChange =(event) =>{
    var name = event.target.name ;
    var value=event.target.value ;
    console.log(name);
    console.log(value);
    this.setState({
      [name]:value
    });

  }
  handleOnClick =() =>{
    console.log(JSON.stringify(this.state));
   
      
        addRoomAction(this.state.username,this.state.roomNameJoin,this.state.passwordRoom).then((respive) =>{console.log(respive);
        if(respive.result === 'ok'){
          this.props.history.push('/Teams') ;
        }else if(respive.result === 'failed_joined'){
           alert("User joined the room.");
        }else if(respive.result === 'failed_roomName'){
            alert("RoomName wrong.");
        }else if(respive.result === 'failed_password'){
            alert("Password wrong") ;
        }
        
        })
    
  }
     render() {

          return (
               <form>
        <label>
          <p className="label-txt">ENTER YOUR ROOM</p>
          <input onChange={(event)=> this.isChange(event)} type="text" className="input" name="roomNameJoin" />
          <div className="line-box">
            <div className="line" />
          </div>
        </label>
        <label>
          <p className="label-txt">ENTER YOUR PASSWORD</p>
          <input onChange={(event)=> this.isChange(event)} type="text" className="input" name="passwordRoom" />
          <div className="line-box">
            <div className="line" />
          </div>
        </label>
       
        <button type="reset" onClick={()=>this.handleOnClick()}>submit</button>
      </form>
          )
     }
}
