import React, { Component } from 'react';

class Rooms extends Component {
    render() {
        return (
            <div className="col-md-3 bg-white ">
                <div className=" row border-bottom padding-sm" style={{height: '40px'}}>
                     Rooms
                </div>
                 <ul className="friend-list">
                        <li className="active bounceInDown" >
                            <a href="#" className="clearfix">
                                <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" className="img-circle" />
                                 <div className="friend-name">	
                                      <strong>{this.props.roomName}</strong>
                                 </div>
                            </a>
                        </li>

                        
    
                </ul>
            </div>

        );
    }
}

export default Rooms;