import React, { Component } from 'react'
import io from 'socket.io-client';

export default class Home extends Component {
     constructor(props){
          super(props);
          this.socket =null;
     }
     componentDidMount(){
          this.socket = io('localhost:3001');
     }
     render() {
          return (
               <div>
                   <div>
                        
                        <br/>
                        <br/>
                         <img  src= {"image/1.jpg"} alt = ""/>
                        
                   </div>

                  
               </div>
          )
     }
}
