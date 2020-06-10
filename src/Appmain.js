import React, { Component } from 'react'
import  PersistentDrawerLeft from './UI/MenuBarLeft'
import {Switch, Route} from 'react-router-dom'
import Chat from './Component/Chat/chat'
import Teams from './Component/ListTeams'
import Home from './Home'
import App from './Component/App';
import CallUser from './Component/CallUser';
import Login from './User/Login';
import Register from './User/Register';
import Profile from './User/Profile';
import changeProfile from './User/changeProfile';
import changing from './User/changing';
import InfoTeam from './Component/InfoTeam';
import createGroup from './Component/createGroup';
import JoinGroup from './Component/JoinGroup';
import User from './Component/User';
import ChatUser from './Component/Chat/chatUser'

export default class Appmain extends Component {
     render() {
          return (

               <React.Fragment>
                    <PersistentDrawerLeft/>
                    <br/>
                    <br/>
                    <br/>
                    <Switch>
                         <Route path="/createGroup" component={createGroup}/>
                         <Route path="/joinGroup" component={JoinGroup}/>
                         <Route path="/InfoTeam" component={InfoTeam} />  
                         <Route path="/Call" component={App} />
                         <Route path="/CallUser" component={CallUser} />
                         <Route path = "/changing" component={changing}/>
                         <Route path="/Chat" component={Chat} />
                         <Route path="/Teams" component={Teams} />
                         <Route exact path="/" component={Home} />
                         <Route path = "/Login" component={Login}/>
                         <Route path = "/Register" component={Register}/>
                         <Route path = "/Profile" component = {Profile}/>
                         <Route path = "/changeProfile" component= {changeProfile}/>
                         <Route path = "/listUser" component= {User}/>
                         <Route path="/ChatUser" component={ChatUser} />
                    </Switch>

               </React.Fragment>

          )
     }
}
