import axios from 'axios'

export const register = newUser => {
  return axios
    .post('http://localhost:9000/Users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('http://localhost:9000/Users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      sessionStorage.setItem('usertoken', JSON.stringify(response.data))
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
export const updateProfile = user =>{
  return axios
    .post('http://localhost:9000/Users/updateProfile',{
      first_name : user.first_name,
      last_name : user.last_name,
      dec: user.dec
    })
}

