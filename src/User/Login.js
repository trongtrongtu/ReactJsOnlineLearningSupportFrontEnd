import React, { Component } from 'react'
import { login } from './UserFunction'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}

    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if (res) {
        this.props.history.push(`/profile`)
      }
    })
  }


  render() {

    return (
      <div style={{
        backgroundImage: `url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img(11).jpg")`, backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", width: "100%", height: "100%"
      }} >
        <div>
          <br />
          <br />
         
          <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <div style={{ marginTop: "5px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Avatar style={{ margin: "1px", backgroundColor: "red" }}

              >
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Đăng nhập
       </Typography>
              <form style={{ width: '100%', marginTop: "2px" }} noValidate onSubmit={this.onSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Địa chỉ email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Mật khẩu"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange = {this.onChange}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Nhớ đăng nhập"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ margin: "3px 0 2px" }}
                >
                  Đăng nhập
         </Button>
                <Grid container>

                  <Grid item>
                    <Link to="/Register" variant="body2">
                      {"Bạn đã có tài khoản? Đăng ký"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>

          </Container>
          <div style={{height:"225px"}}>

          </div>
        </div>

      </div>

    )
  }
}

export default Login