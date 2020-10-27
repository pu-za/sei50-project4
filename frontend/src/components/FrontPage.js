import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Emojis from './Emojis'


class FrontPage extends Component {


  handleScroll = ( element ) => {
    if (element) {
      window.scrollTo(0, element.current.offsetTop)
    }
  }

  render() {
    const { emojis } = this.props
    
    const activityScroll = React.createRef()
    const animalScroll = React.createRef()
    const peopleScroll = React.createRef()
    const drinksScroll = React.createRef()


    
    const activities = emojis.filter(emoji => emoji.category === 'Activity' )
    const animals = emojis.filter(emoji => emoji.category === 'Animals & Nature' )
    const people = emojis.filter(emoji => emoji.category === 'Smiles and people' )
    const drinks = emojis.filter(emoji => emoji.category === 'Food & Drink' )
    
    return (
      <Fragment>
        <div className="container">
          <div className="categories">
            <div className="category" onClick={ ()=> this.handleScroll(activityScroll) }>Activity</div>
            <div className="category" onClick={ ()=> this.handleScroll(animalScroll) }>Animals and Nature</div>
            <div className="category" onClick={ ()=> this.handleScroll(peopleScroll) }>Smiles and people</div>
            <div className="category" onClick={ ()=> this.handleScroll(drinksScroll) }>Food and Drink</div>

          </div>
          
          <Emojis emojis={activities} element={activityScroll} />

          <Emojis emojis={animals} element={animalScroll} />
          <Emojis emojis={people} element={peopleScroll} />
          <Emojis emojis={drinks} element={drinksScroll} />
          
        </div>
      </Fragment>
    )
  }
}
export default withRouter(FrontPage)



