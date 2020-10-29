import React, { Component, Fragment } from 'react'
import { login } from '../actions/auth'

import { Link, withRouter } from 'react-router-dom'

class Login extends Component {

  state = {
    formData: {
      email: '',
      password: ''
    },
    error: ''
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

    if (res.error) {
      this.setState({ error: res.error })
      setTimeout(() => {
        this.setState({ error: '' })
      }, 5000 )
    }


  }


  render() {

    const { email, password } = this.state.formData
    console.log(this.state.formData)
    const { error } = this.state
    
    

    return (
      <Fragment>
        <div className="container">
          <form className="auth-form" autoComplete="off" onSubmit={e=> this.handleSubmit(e)}>
            <h1>Login</h1>
            
            <label htmlFor='email' className='input-label'>
              <span >e-mail:</span>
              <input type='text' className='auth-input' autoComplete="off" id='email' name='email' value={ email } onChange={ e=> this.handleChange(e) } required />
            
            </label>  
            
            <label htmlFor='password' className='input-label'>
              <span>password</span>
              <input type='password' className='auth-input' autoComplete="off" name='password' value={ password } onChange={ e=> this.handleChange(e) } required />
            </label>
            <button className='auth-button' type='submit'>Login</button>
          </form>

          {
            error && <div className="error-msg">{error}</div>
          }
          <span style={{ marginLeft: '30px', marginBottom: '15px' }}>or create new account now </span>
          <span style={{ marginLeft: '30px' }}><Link to="/register"> sign up </Link></span>
        </div>
      </Fragment>
    )
  }
}
export default withRouter(Login)