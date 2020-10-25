import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class FrontIndex extends Component {



  render() {



    return (
      <Fragment>
        <div className="board">
          <span>Express Yourself</span> 
          <Link to='/register'>get started</Link>

          
        </div>
        <div className="row">
          <div className="half">
            New for 2020! JoyPixels 6.0 includes 3,342 originally crafted icon designs and is 100% Unicode 13 compatible. We offer the largest selection of files ranging from png, svg, iconjar, sprites, and fonts.
          </div>
        </div>
      </Fragment>
    )
  }
}
export default FrontIndex