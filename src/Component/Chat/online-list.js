import React, { Component } from 'react';
import UserOnlineList from './useronlinelist';

class OnlineList extends Component {
    render() {
        return (
            <div className="col-md-4 bg-white ">
                <div className=" row border-bottom padding-sm" style={{ height: '40px' }}>
                    Thành Viên Online 
                </div>
                <ul className="friend-list">
                    {this.props.userOnline.map((item, index) =>
                        <UserOnlineList key={index} userName={item.name} roomName={item.roomName} />
                    )}

                </ul>
            </div>

        );
    }
}

export default OnlineList;