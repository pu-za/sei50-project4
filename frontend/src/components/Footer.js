import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import up from '../styles/up-arrow.png'

class Footer extends Component {



  render() {



    return (
      <Fragment>
        <Link to="/">Express Yourself With Emojis</Link> 

        <button className="scroll-button" onClick={ () => window.scrollTo({ top: 0 })}><img src={ up } width="24px" /></button>
        
      </Fragment>
    )
  }
}
export default Footer