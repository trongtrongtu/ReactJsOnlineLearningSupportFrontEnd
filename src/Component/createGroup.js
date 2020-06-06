import React, { Component } from 'react';
import './createGroup.css';
import './createGroupJS.js';
import axios from 'axios' ;

const addRoomAction =(username,roomNameCreate,passwordRoom)=>(axios.post('/create_room',{username,roomNameCreate,passwordRoom}).then((resp)=>resp.data));
export default class createGroup extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'tuanla99',
      roomNameCreate: '',
      passwordRoom:'',
      passwordRoom_1:''
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
    if(this.state.passwordRoom === this.state.passwordRoom_1){
      var {username,roomNameCreate,passwordRoom,passwordRoom_1} = this.state;
        addRoomAction(username,roomNameCreate,passwordRoom).then((respive) =>{console.log(respive);})
    }else{
      alert("Nhap Password khong khop.");
    }
  }
     render() {

          return (
               <form>
        <label>
          <p className="label-txt">ENTER YOUR ROOM</p>
          <input onChange={(event)=> this.isChange(event)} type="text" className="input" name="roomNameCreate" />
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
        <label>
          <p className="label-txt">ENTER YOUR PASSWORD</p>
          <input onChange={(event)=> this.isChange(event)} type="text" className="input" name="passwordRoom_1" />
          <div className="line-box">
            <div className="line" />
          </div>
        </label>
        <button type="reset" onClick={()=>this.handleOnClick()}>submit</button>
      </form>
          )
     }
}
