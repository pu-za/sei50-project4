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
    const people = emojis.filter(emoji => emoji.category === 'Smileys and people' )
    const drinks = emojis.filter(emoji => emoji.category === 'Food & Drink' )

    const desc = {
      activ: '⚽ Activity Emojis for sports, music, the arts, hobbies and other activities. Activities! All the fun little things you can do with your hubby or significant other. You can run, swim, boat. Do not forget your friends!',
      animal: '🐻 Animals & Nature View the emoji that occur naturally in our environment. Fish, flowers, trees, slugs, leaves, you name it! The emoji squirrel! Wow! If related to the environment or it breathes but is not a person, this is the category for you. Check out all the cute little furry and barnyard animals, oink!',
      ppl: '😃 Smileys & People Emojis for smileys, people, families, hand gestures, clothing and accessories. The Emoticon Category! Smileys, faces, person bowing deeply, man with red face, hearts, hand gestures. Happy. Previous category name: Smileys. View the gallery.',
      drinks: '🍔 Food & Drink mojis for fruit, vegetables, meals, beverages and utensils. Fruits, vegetables, candy, popcorn, pizza. They finally made a taco emoji! So many to try in just one sitting!'
    }

    return (
      <Fragment>
        <div className="container">
          <div className="categories">
            <div className="category" onClick={ ()=> this.handleScroll(activityScroll) }>Activity</div>
            <div className="category" onClick={ ()=> this.handleScroll(animalScroll) }>Animals and Nature</div>
            <div className="category" onClick={ ()=> this.handleScroll(peopleScroll) }>Smileys and people</div>
            <div className="category" onClick={ ()=> this.handleScroll(drinksScroll) }>Food and Drinks</div>

          </div>
          
          <Emojis emojis={activities} element={activityScroll} category="Activity" description={desc.activ} />

          <Emojis emojis={animals} element={animalScroll} category="Animals and Nature" description={desc.animal} />
          <Emojis emojis={people} element={peopleScroll} category="Smileys and people" description={desc.ppl} />
          <Emojis emojis={drinks} element={drinksScroll}  category="Food and Drinks" description={desc.drinks}/>
          
        </div>
      </Fragment>
    )
  }
}
export default withRouter(FrontPage)



