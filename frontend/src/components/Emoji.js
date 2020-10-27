import React, { Component, Fragment } from 'react'
import { getEmoji } from '../actions/emoji'

class Emoji extends Component {
  state = {
    emoji: null
  }

  async componentDidMount() {
    const res = await getEmoji(this.props.match.params.id)
    this.setState({ emoji: res })
  }
    

  render() {
    const { emoji } = this.state
    

    return (
      <Fragment>
        {
          emoji && <Fragment>
            <div className="container">
              <div className="single-container" >
                
                <h1 style={{ textAlign: 'center' }}>{emoji.name}</h1>
                <p>{emoji.category}</p>
                <img src={emoji.image} />
              </div>
            </div>
          </Fragment>
        }
        
      </Fragment>
    )
  }
}
export default Emoji