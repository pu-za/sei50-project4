import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

class Emojis extends Component {



  render() {
    const { emojis, history, element } = this.props
    
    
    return (
      <Fragment>
        <div className="row" ref={element}>

          <div className="category-content">
            <div className="category-title">
              Activity

              <button className="scroll-button" onClick={ () => window.scrollTo({ top: 0 })}>scroll</button>
            </div>
            <div className="category-describe">

              We revisit our roots by designing an all new pack of flat-colored emoji icons. <br/>
              Flat Emoji 1.0 takes 200 popular signature emoji and offers a simplified design, <br />
              plus 2 bordered versions (black, pearl), for a total of 600 icons.


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