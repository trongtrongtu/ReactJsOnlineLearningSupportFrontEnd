import React, { Component } from 'react';
import './createGroup.css';
import './createGroupJS.js';
import axios from 'axios' ;

const addRoomAction =(username,roomNameCreate,passwordRoom)=>(axios.post('/create_room',{username,roomNameCreate,passwordRoom}).then((resp)=>resp.data));
export default class createGroup extends Component {
  constructor(props){
    super(props);
    this.state={
      username:sessionStorage.getItem('user_login'),
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
      
        addRoomAction(this.state.username,this.state.roomNameCreate,this.state.passwordRoom).then((respive) =>{console.log(respive);
        if(respive.result === 'ok'){
          this.props.history.push('/Teams') ;
        }
        })
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
