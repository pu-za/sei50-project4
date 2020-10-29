import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import whale from '../styles/whale.jpg'
import ciao from '../styles/Ciao.gif'
import window from '../styles/window.jpg'


class FrontIndex extends Component {



  render() {



    return (
      <Fragment>
        <div className="board">
          <span>Express Yourself</span> 
          <Link to='/register'>get started</Link>
          <img src={ ciao } className="ciao" />
          <img src={ whale } className="whale" />
        </div>
        <div className="row">
          <div className="half">
            Emotions behind  Emoji - Do you know what they are?? <br />
            Words provide endless ways to tell <br /> somebody what you’re thinking or feeling. <br />
            But sometimes a picture says it all <br />
            <img src={ window } className='window' />
          </div>
        </div>
      </Fragment>
    )
  }
}
export default FrontIndex