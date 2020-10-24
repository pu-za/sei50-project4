import React, { Component, Fragment } from 'react'


class Header extends Component {
  state = {
    menu: false
  }


  render() {

    console.log(this.state.menu)

    return (
      <Fragment>
        
        <div className="webName">Showcase emoji</div>
        <div className="toggleBox">

          <button className="toggleButton" onClick={()=> this.setState({ menu: !this.state.menu })}>hi</button>
          {
            this.state.menu && <Fragment>
              <div className="user-menu">
                <div className="nav">Showcase emoji</div>
                <hr />
                <div className="nav">Sign in</div>
                <div className="nav">Sign up</div>
                <div className="nav">Do not do anything</div>
                <hr />
              </div>
            </Fragment>
          }
          
        </div>
      </Fragment>
    )
  }
}
export default Header