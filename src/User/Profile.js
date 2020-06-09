import React, { Component } from 'react'
import { myAccount } from './UserFunction';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import { update_user } from './UserFunction'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: sessionStorage.getItem('user_login'),
      dia_chi: '',
      email: '',
      sdt: '',
      ngay_sinh: '',
      gioi_tinh: '',
      errors: '',
      startDate: new Date()
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    this.refreshDataFromServer();
  }
  refreshDataFromServer = () => {
    myAccount(sessionStorage.getItem('user_login')).then((userFromServer) => {
      this.setState({
        gioi_tinh: userFromServer[0].gioi_tinh,
        password: userFromServer[0].password,
        email: userFromServer[0].email,
        sdt: userFromServer[0].sdt,
        dia_chi: userFromServer[0].dia_chi,
        ngay_sinh: userFromServer[0].ngay_sinh,
        startDate: new Date(userFromServer[0].ngay_sinh)
      });
      console.log(this.state.ngay_sinh)
    }).catch((error) => {
      console.error(error);
    });
  }
  handleChange = date => {
    this.setState({
      ngay_sinh: date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate(),
      startDate: date
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
    update_user(this.state.username, this.state.gioi_tinh, this.state.ngay_sinh, this.state.email, this.state.sdt, this.state.dia_chi).then(res => {
      if (res.result == 'failed') {
        this.setState({ errors: res.messege })
      } else {
        this.props.history.push(`/Profile`)
        this.setState({ errors: 'Cập nhật tài khoản thành công' })
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

          <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <div style={{ marginTop: "5px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Avatar style={{ margin: "1px", backgroundColor: "red" }}

              >
                <AccountCircleIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Tài khoản
              </Typography>
              <form style={{ marginLeft: "-100px", width: '150%', marginTop: "10px", borderRadius: 5 }} noValidate onSubmit={this.onSubmit}>
                <div style={{ flexDirection: 'row', display: 'flex' }}>
                  <span style={{ width: '150px', marginTop: '30px' }}>Tên Tài Khoản:</span>
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

                  />
                </div>
                <div style={{ flexDirection: 'row', display: 'flex' }}>
                  <span style={{ width: '150px', marginTop: '30px' }}>Địa Chỉ Email:</span>
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
                </div>
                <div style={{ flexDirection: 'row', display: 'flex' }}>
                  <span style={{ width: '135px', marginTop: '30px', paddingRight:'40px' }}>Địa Chỉ:</span>
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
                </div>
                <div style={{ flexDirection: 'row', display: 'flex' }}>
                  <span style={{ width: '150px', marginTop: '30px' }}>Số Điện Thoại:</span>
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
                </div>
                <div style={{ marginTop: '15px' }}>
                  <RadioGroup value={this.state.gioi_tinh} onChange={this.onChange_radio} horizontal>
                    <RadioButton value="Nam">Nam</RadioButton>
                    <RadioButton value="Nữ">Nữ</RadioButton>
                  </RadioGroup>
                </div>
                <div style={{ marginTop: '15px' }}>
                  <div style={{ display: 'inline', marginRight: '20px' }}>Ngày Sinh: </div>
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
                <div style={{ color: "green", marginTop: '10px' }}>{this.state.errors}</div>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ margin: "20px 0 20px" }}
                >
                  Lưu
         </Button>
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

export default Profile