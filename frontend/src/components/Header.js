import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { logout } from '../actions/auth'
class Header extends Component {
  state = {
    menu: false,
    loggedIn: this.props.loggedIn
  }

  componentDidMount() {
    this.props.setUser()
  }
  
  handleLogout = async() => {
    await logout(this.props.history)
    this.props.setUser()

  }

  componentDidUpdate(prevProps) {
    if (prevProps.loggedIn !== this.props.loggedIn) {
      this.props.setUser()
    }
    
  }


  render() {
    
    const { history } = this.props
    const { loggedIn } = this.props

    return (
      <Fragment>
        {
          loggedIn && <button className="logout" onClick={ () => this.handleLogout() }>Logout</button>
        }
        
        <div className="webName">Showcase emoji</div>
        <div className="toggleBox">

          <button className="toggleButton" onClick={()=> this.setState({ menu: !this.state.menu })}>hi</button>
          {
            !loggedIn && this.state.menu && <Fragment>
              <div className="user-menu">
                <div className="nav" onClick={ ()=> history.push('/')}>Home</div>
                <hr />
                <div className="nav" onClick={ ()=> history.push('/login') }>Sign in</div>
                <div className="nav" onClick={ ()=> history.push('/register') }>Sign up</div>
                <hr />
              </div>
            </Fragment>
          }
          {
            loggedIn && this.state.menu && <Fragment>
              <div className="user-menu">
                <div className="nav" onClick={ ()=> history.push('/') }>Home</div>
                  
              </div>
            </Fragment>
          }
          
        </div>
      </Fragment>
    )
  }
}
export default withRouter(Header)