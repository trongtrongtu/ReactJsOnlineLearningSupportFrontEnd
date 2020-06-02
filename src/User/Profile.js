import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
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
      <div >
        <div className="container">
          <div className = "row">
            <div className = "col-lg-3">

            </div>
            <div className = "col-lg-9">
            <Grid container justify="center" alignItems="center">

              <Avatar alt="Remy Sharp" src="image/hh.jpg" style ={{margin:"10px",height:"250px", width:"250px", right:"120px"}} />
            </Grid>
            <div>
              Ho ten:Huan Hoa Hong
            </div>
            <div>
              Gioi thieu : Muon thanh cong phai dam mao hiem mot ti nhung trong tam kiem soat
            </div>
            <Link to="/changing">
              <button >
                Thay doi thong tin
             </button>
            </Link>
          </div>
          </div>
         
        </div>

      </div>



    )
  }
}

export default Profile