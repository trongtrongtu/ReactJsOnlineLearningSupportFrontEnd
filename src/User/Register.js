import React, { Component } from 'react'
import { register } from './UserFunction'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
//const selected = moment(isoDateStr).toDate();
// const [startDate, setStartDate] = useState(0);
class Register extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      dia_chi: '',
      email: '',
      sdt: '',
      gioi_tinh: '',
      ngay_sinh: '',
      errors: '',
      startDate : new Date()
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  
  handleChange = date => {
    this.setState({
      ngay_sinh: date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate(),
      startDate: new Date(date)
    });
  };
  onChange_radio = value => {
    this.setState({ gioi_tinh: value })
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    register(this.state.username, this.state.password, this.state.email, this.state.dia_chi, this.state.sdt, this.state.gioi_tinh, this.state.ngay_sinh).then(res => {
      if (res == 'empty') {
        this.setState({ errors: 'Cần nhập đầy đủ các trường' })
      } else if (res == 'failed_exists') {
        this.setState({ errors: 'Tên tài khoản đã tồn tài' })
      } else {
        sessionStorage.setItem("user_login", this.state.username);
        this.props.history.push(`/`);
      }
    })
  }

  render() {
    return (
      <div style={{
        backgroundImage: `url("image/33.jpg")`, backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", width: "100%", height: "100%"
      }} >
        <div>
          <br />

          <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <div style={{ marginTop: "5px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Avatar style={{ margin: "1px", backgroundColor: "red" }}

              >
                <VpnKeyIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Đăng ký
       </Typography>
              <form style={{ marginLeft: "-100px", width: '150%', marginTop: "10px", borderRadius: 5 }} noValidate onSubmit={this.onSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type="text"
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
                  type="password"
                  placeholder="Mật khẩu"
                  name="password"
                  autoComplete="password"

                  autoFocus
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  placeholder="Địa chỉ email"
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
                  name="dia_chi"
                  placeholder="Địa chỉ"
                  type="text"
                  id="dia_chi"
                  value={this.state.dia_chi}
                  onChange={this.onChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="sdt"
                  placeholder="Số điện thoại"
                  type="text"
                  id="sdt"
                  value={this.state.sdt}
                  onChange={this.onChange}
                />
                <div style={{ marginTop: '15px' }}>
                  <RadioGroup onChange={this.onChange_radio} horizontal>
                    <RadioButton value="Nam">Nam</RadioButton>
                    <RadioButton value="Nữ">Nữ</RadioButton>
                  </RadioGroup>
                </div>
                <div style={{ marginTop: '15px' }}>
                  <div style={{ display: 'inline', marginRight: '20px' }}>Ngày sinh: </div>
                  
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    dateFormat="dd/MM/yyyy"
                    />
                   

                </div>
                <div style={{ color: "red", marginTop: '10px' }}>{this.state.errors}</div>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ margin: "20px 0 20px" }}
                >
                  Đăng ký
         </Button>
                <Grid container>

                  <Grid item>
                    <Link to="/Login" variant="body2">
                      {"Bạn đã có tài khoản? Đăng Nhập"}
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

export default Register