import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { logout } from '../actions/auth'
import logoutimg from '../styles/logout.png'
class Header extends Component {
  state = {
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
    
    const { history, menu } = this.props
    const { loggedIn } = this.props

    return (
      <Fragment>
        {
          loggedIn && <button className="logout" onClick={ () => this.handleLogout() }><img src={ logoutimg } height="24px" /></button>
        }
        
        <div className="webName" onClick={ () => history.push('/')}>Showcase emoji</div>
        <div className="toggleBox">

          <button className="toggleButton" onClick={()=> this.props.setMenu( !menu )}>Menu</button>
          {
            !loggedIn && this.props.menu && <Fragment>
              <div className="user-menu" >
                <div className="nav" onClick={ ()=> { 
                  history.push('/'), this.props.setMenu(false) 
                }}>Home</div>
                <hr />
                <div className="nav" onClick={ ()=> { 
                  history.push('/login'), this.props.setMenu(false) 
                }}>Sign in</div>
                <div className="nav" onClick={ ()=> { 
                  history.push('/register'), this.props.setMenu(false) 
                }}>Sign up</div>
                <hr />
              </div>
            </Fragment>
          }
          {
            loggedIn && this.props.menu && <Fragment>
              <div className="user-menu">
                <div className="nav" onClick={ ()=> { 
                  history.push('/'), this.props.setMenu(false) 
                }}>Home</div>
                  
              </div>
            </Fragment>
          }
          
        </div>
      </Fragment>
    )
  }
}
export default withRouter(Header)