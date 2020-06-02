import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ButtonBase from '@material-ui/core/ButtonBase'
import Button from '@material-ui/core/Button'
class Profile extends Component {
     constructor() {
          super()
          this.state = {
               first_name: '',
               last_name: '',
               email: '',
               dec: '',
               errors: {}
          }
     }



     render() {
          return (
               <div style={{ margin: "auto", width: "50%" }}>
                    <div className="container">

                         <div className="col-sm-8 mx-auto">
                              <h1 className="text-center">Thay doi thong tin ca nhan</h1>
                         </div>
                         <table className="table col-md-6 mx-auto">
                              <tbody>
                                   <tr>
                                        <input
                                             ref={'file-upload'}
                                             type='file'
                                        />
                                       
                                        <br />
                                       
                                        <input type="text" placeholder="nhap ten"></input>
                                        <br/>

                                        <input type="text" placeholder="nhap Ho"></input>
                                        <br/>
                                        <input type="text" placeholder="nhap gioi thieu"></input>
                                   </tr>
                                   <Link to="/changeProfile">
                                        <button >
                                             Xac Nhan thay doi
             </button>
                                   </Link>
                              </tbody>

                         </table>

                    </div>
               </div>



          )
     }
}

export default Profile