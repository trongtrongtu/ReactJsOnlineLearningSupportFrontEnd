
import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TeamConsumer } from './Context';
export default class Team extends Component {
    state={}
    render() {
    const {id, title, img }=this.props.team;
        return (
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <TeamConsumer>
                       {(value)=>(
                           <div className="img-container " style={{backgroundSize:"cover",backgroundPosition:"center center"}}
                           onClick={ () => value.handleDetail(id)}>
                            <Link to ="/InfoTeam">
                            <img src={img} alt="product" style = {{height:"160px", width:"250px"}} className="card-img-top" />
                            </Link>
                                
                        <br/>
                        <br/>    
                        <div style={{textAlign:"center"}}>{title}</div>
                            
                          
                           </div>
                       )}
                    </TeamConsumer> 
                   
                </div>
            </div>
        )
    }
}
Team.propTypes = {
    team: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
       
    }).isRequired
}

