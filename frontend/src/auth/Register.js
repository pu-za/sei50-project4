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
    }
  }


  handleChange = (e) => {
    this.setState({ formData: { ...this.state.formData, [e.target.name]: e.target.value } })
  }

  handleSubmit = async(e) => {
    e.preventDefault()
    this.setState({ formData: { username: '', email: '', password: '', passwordConfirmation: '' } })
    const res = await register(this.state.formData, this.props.history)
    console.log(res)
  }


  render() {

    const { email, password, passwordConfirmation, username } = this.state.formData
    console.log(this.state.formData)

    

    return (
      <Fragment>
        <div className='container'>
          <form className='auth-form' onSubmit={e=> this.handleSubmit(e)}>
            <h1>Sign up</h1>
            <label htmlFor='username' className='input-label'>
              <span>name:</span>
              <input type='text' className='auth-input' name='username' value={ username } onChange={ e=> this.handleChange(e) } />
            </label>
            <label htmlFor='email' className='input-label'>
              <span>e-mail:</span>
              <input type='text' className='auth-input' name='email' value={ email } onChange={ e=> this.handleChange(e) } />
            </label>
            <label htmlFor='password' className='input-label'>
              <span>password:</span>
              <input type='text' className='auth-input' name='password' value={ password } onChange={ e=> this.handleChange(e) } />
            </label>
            <label htmlFor='passwordConfirmation' className='input-label'>
              <span>repeat password:</span>
              <input type='text' className='auth-input' name='passwordConfirmation' value={ passwordConfirmation } onChange={ e=> this.handleChange(e) } />
            </label>
            <button className='auth-button' type='submit'>Register</button>
          </form>
          <span style={{ marginLeft: '30px', marginBottom: '15px' }}>if you have the account </span>
          <span style={{ marginLeft: '30px' }}><Link to="/login"> Log in </Link></span>
        </div>
      </Fragment>
    )
  }
}
export default withRouter(Register)