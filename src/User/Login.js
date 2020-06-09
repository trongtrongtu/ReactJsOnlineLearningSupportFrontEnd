import React, { Component } from 'react'
import { login } from './UserFunction'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: ''

    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault();
    login(this.state.username, this.state.password).then(res => {
      if (res == 'empty') {
        this.setState({ errors: 'Tài khoản hoặc mật khẩu trống' })
      } else if (res == 'ok') {
        sessionStorage.setItem("user_login",this.state.username);
        this.props.history.push(`/Profile`)
      } else if (res == 'failed_login') {
        this.setState({ errors: 'Tài khoản hoặc mật khẩu sai' })
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
              <form style={{marginLeft:"-100px", width: '150%', marginTop: "10px", borderRadius: 5 }} noValidate onSubmit={this.onSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  placeholder="Tài khoản"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  placeholder="Mật khẩu"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <div style={{ color: "red" }}>{this.state.errors}</div>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ margin: "20px 0 20px" }}
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
          <div style={{ height: "225px" }}>

          </div>
        </div>

      </div>

    )
  }
}

export default Login