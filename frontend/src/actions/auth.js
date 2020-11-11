import axios from 'axios'
/* import setHeader from '../utils/setHeader' */




// set token into the local storage
export const login = async(formData, history) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post('/api/auth/login/', formData, config)
    
    if (res.data) {
      await localStorage.setItem('token', res.data.token)

    }
    console.log('user logged in')
    history.push('/')
    
    return res.data
  } catch (err) {
    return { error: 'Invalid credentials.' }
  }
}
export const register = async(formData, history) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post('/api/auth/register/', formData, config)


    history.push('/')

    console.log('hello user')
    return res.data
  } catch (err) {
    return { error: 'User already exists.' }
  }
}
// remove token from the local storage
export const logout = async(history) => {
  
  await localStorage.removeItem('token')

  /* setHeader() */
  console.log('user logged out')
  return history.push('/')
}
export const getUsers = async() => {
  const res = await axios.get('/api/auth')
  
  return res.data
}