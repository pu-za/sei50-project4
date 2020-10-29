import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { register } from '../actions/auth'




class Register extends Component {

  state = {
    formData: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    error: ''
  }


  handleChange = (e) => {
    this.setState({ formData: { ...this.state.formData, [e.target.name]: e.target.value } })
  }

  handleSubmit = async(e) => {
    e.preventDefault()
    this.setState({ formData: { username: '', email: '', password: '', passwordConfirmation: '' } })
    const res = await register(this.state.formData, this.props.history)
    
    if (res.error) {
      this.setState({ error: res.error })
      setTimeout(() => {
        this.setState({ error: '' })
      }, 5000 )
    }
    
    console.log(res)
  }


  render() {

    const { email, password, passwordConfirmation, username } = this.state.formData
    console.log(this.state.formData)
    const { error } = this.state
    

    return (
      <Fragment>
        <div className='container'>
          <form className='auth-form' autoComplete="off" onSubmit={e=> this.handleSubmit(e)}>
            <h1>Sign up</h1>
            <label htmlFor='username' className='input-label'>
              <span>name:</span>
              <input type='text' className='auth-input' autoComplete="off" name='username' value={ username } onChange={ e=> this.handleChange(e) } required />
            </label>
            <label htmlFor='email' className='input-label'>
              <span>e-mail:</span>
              <input type='text' className='auth-input' autoComplete="off" name='email' value={ email } onChange={ e=> this.handleChange(e) } required />
            </label>
            <label htmlFor='password' className='input-label'>
              <span>password:</span>
              <input type='password' className='auth-input' autoComplete="off" name='password' value={ password } onChange={ e=> this.handleChange(e) } required />
            </label>
            <label htmlFor='passwordConfirmation' className='input-label'>
              <span>repeat password:</span>
              <input type='password' className='auth-input' autoComplete="off" name='passwordConfirmation' value={ passwordConfirmation } onChange={ e=> this.handleChange(e) } required />
            </label>
            <button className='auth-button' type='submit'>Register</button>

          </form>
          {
            error && <div className="error-msg">{error}</div>
          }
          <span style={{ marginLeft: '30px', marginBottom: '15px' }}>if you have the account </span>
          <span style={{ marginLeft: '30px' }}><Link to="/login"> Log in </Link></span>
        </div>
      </Fragment>
    )
  }
}
export default withRouter(Register)