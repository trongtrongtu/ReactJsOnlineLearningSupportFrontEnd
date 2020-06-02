
import React, { Component } from 'react'
import { TeamConsumer } from './Context';
import { Link } from "react-router-dom"

export default class InfoTeam extends Component {
     render() {
          return (
               <TeamConsumer>
                    {value => {
                         const {

                              img,
                              info,
                              title,
                              user1, user2, user3
                         } = value.detailProduct;

                         return (
                              <div className="container py-5">

                                   <div className="row">
                                        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                             <h1>{title}</h1>
                                        </div>
                                   </div>

                                   <div className="row">
                                        <div className="col-10 mx-auto col-md-6 my-3">
                                             <img src={img} className="img-fluid" alt="" />
                                        </div>

                                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                             <div>{info}</div>
                                             <br/>
                                             <div style={{ fontSize:"22px"}}>Thanh vien</div>
                                             <div>
                                                  <div>
                                                       <div style={{fontSize:"18px"}}>{user1}</div>
                                                       <br></br>
                                                       <div style={{fontSize:"18px"}}>{user2}</div>
                                                       <br/>
                                                       <div style={{fontSize:"18px"}}>
                                                            {user3}
                                                       </div>
                                                  </div>
                                             </div>

                                        </div>
                                   </div>

                              </div>
                         );
                    }}

               </TeamConsumer>
          )
     }
}
