import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import up from '../styles/up-arrow.png'

class Emojis extends Component {



  render() {
    const { emojis, history, element, description, category } = this.props
    
    
    return (
      <Fragment>
        <div className="row" ref={element}>

          <div className="category-content">
            <div className="category-title">
              {
                category
              }

              <button className="scroll-button" onClick={ () => window.scrollTo({ top: 0 })}><img src={ up } width="24px" /></button>
            </div>
            <div className="category-describe">

              {
                description
              }

            </div>
            <div className="emojis-box">
              {
                emojis.map(emoji => <img key={emoji.id} src={ emoji.image } onClick={ ()=> history.push(`/emojis/${emoji.id}`)} className="image" />)
              }

            </div>
          </div>

        </div>
        
      </Fragment>
    )
  }
}
export default withRouter(Emojis)