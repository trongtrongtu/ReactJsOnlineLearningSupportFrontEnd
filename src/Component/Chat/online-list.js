import React, { Component } from 'react';

class OnlineList extends Component {
    render() {
        return (
            <div className="col-md-4 bg-white ">
                <div className=" row border-bottom padding-sm" style={{height: '40px'}}>
                     Member Online
                </div>
                 <ul className="friend-list">
                    {this.props.userOnline.map((item,index) =>
                        
                        <li className="active bounceInDown" key={index}  >
                            <a href="#" className="clearfix">
                                <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" className="img-circle" />
                                 <div className="friend-name" >	
                                    <strong  >{item.name}</strong>
                                 </div>
                            </a>
                        </li>

                        )}
    
                </ul>
            </div>

        );
    }
}

export default OnlineList;