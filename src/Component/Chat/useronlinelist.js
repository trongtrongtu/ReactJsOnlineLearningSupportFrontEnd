import React, { Component } from 'react';

class useronlinelist extends Component {
    render() {
        if (this.props.roomName == sessionStorage.getItem('room')) {
            return (
                <li className="active bounceInDown" key={this.props.index}  >
                    <a href="#" className="clearfix">
                        <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" className="img-circle" />
                        <div className="friend-name" >
                            <strong>{this.props.userName}</strong>
                        </div>
                    </a>
                </li>

            );
        } else {
            return (<div></div>);
        }
    }
}

export default useronlinelist;