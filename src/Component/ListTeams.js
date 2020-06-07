import React, { Component } from 'react'
import Team from "./team";
import {Link } from 'react-router-dom';
import { TeamConsumer } from './Context';

export default class ListTeams extends Component {
    constructor(props){
        super(props);

    }
    render() {

        return (

            <React.Fragment>
               
                <div className="py-5">
                    <div className="container">
                        <div className = "row">
                        <div className="col-lg-12" style={{textAlign:"center",fontFamily:"pacifico",fontSize:"29px"}}>Your Team</div>
                        <Link to = "/createGroup">
                        <button className="btn-sm btn-primary" style={{position:"absolute" ,right:"50px"}}>Create Group</button>
                        </Link>
                        
                        <Link to = "/joinGroup">
                        <button className="btn-sm btn-primary" style={{position:"absolute" ,right:"50px",marginTop:"50px"}}>Join Group</button>
                        </Link>
                        </div>
                        
                        <div className="row">
                            <TeamConsumer>
                                {value => {
                                    return value.teams.map(team => {
                                        return <Team key={team.id} team={team} />
                                    })
                                }}
                            </TeamConsumer>
                        </div>

                    </div>
                </div>
            </React.Fragment>

        );
    }
}
