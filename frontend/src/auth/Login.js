import React, { Component, Fragment } from 'react'
import { login } from '../actions/auth'

import { withRouter } from 'react-router-dom'


class Login extends Component {

  state = {
    formData: {
      email: '',
      password: ''
    }
  }


  handleChange = (e) => {
    this.setState({ formData: { ...this.state.formData, [e.target.name]: e.target.value } })
  }

  handleSubmit = async(e) => {
    e.preventDefault()
    this.setState({ formData: { email: '', password: '' } })
    const res = await login(this.state.formData, this.props.history)
    console.log(res)
    this.props.setUser()
  }


  render() {

    const { email, password } = this.state.formData
    console.log(this.state.formData)
    
    

    return (
      <Fragment>
        <form onSubmit={e=> this.handleSubmit(e)}>
          <h1>Login</h1>

          <input type='text' className='auth-input' name='email' value={ email } onChange={ e=> this.handleChange(e) } />
          <input type='text' className='auth-input' name='password' value={ password } onChange={ e=> this.handleChange(e) } />

          <button type='submit'>Login</button>
        </form>
      </Fragment>
    )
  }
}
export default withRouter(Login)