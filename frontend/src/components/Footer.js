import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'


class Footer extends Component {



  render() {



    return (
      <Fragment>
        <Link to="/">Showcase emoji</Link> 

        <button className="scroll-button" onClick={ () => window.scrollTo({ top: 0 })}>scroll</button>
        
      </Fragment>
    )
  }
}
export default Footer