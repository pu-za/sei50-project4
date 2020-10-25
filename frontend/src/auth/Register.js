import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
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
        <form onSubmit={e=> this.handleSubmit(e)}>
          <h1>Sign up</h1>
        
          <input type='text' className='auth-input' name='username' value={ username } onChange={ e=> this.handleChange(e) } />
          <input type='text' className='auth-input' name='email' value={ email } onChange={ e=> this.handleChange(e) } />
          <input type='text' className='auth-input' name='password' value={ password } onChange={ e=> this.handleChange(e) } />
          <input type='text' className='auth-input' name='passwordConfirmation' value={ passwordConfirmation } onChange={ e=> this.handleChange(e) } />
          
          <button type='submit'>Register</button>
        </form>
      </Fragment>
    )
  }
}
export default withRouter(Register)