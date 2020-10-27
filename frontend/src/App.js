import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import FrontIndex from './components/FrontIndex'
import Login from './auth/Login'
import Register from './auth/Register'
import FrontPage from './components/FrontPage'
import { getEmojis } from './actions/emoji'
import Emoji from './components/Emoji'

class App extends React.Component {
  state = {
    loggedIn: false,
    emojis: [],
    menu: false
  }
  setUser = () => {
    if (localStorage.getItem('token')) {
      this.setState({ loggedIn: true })
    } else {
      this.setState({ loggedIn: false })
    }
  }
  setMenu = (state) => {
    
    this.setState({ menu: state })
  }

  async componentDidMount() {
    
    const res = await getEmojis()
    this.setState({ emojis: res })
  }

  render() {

    const { loggedIn, emojis } = this.state
    return (
      <BrowserRouter>
        <Fragment>
          
          <header className="head">
            
            <Header loggedIn={loggedIn} setUser={this.setUser} menu={this.state.menu} setMenu={this.setMenu} />
          </header>
          
          <main className="main" onClick={ ()=> this.setMenu(false)}>
            <Switch>

              {
                !loggedIn ? <Fragment>
                  <Route exact path = '/' >
                    <FrontIndex loggedIn={loggedIn} setUser={this.setUser} />
                  </Route>
                  <Route exact path='/login'>
                    <Login loggedIn={loggedIn} setUser={this.setUser} />
                  </Route>
                  <Route exact path='/register'>
                    <Register loggedIn={loggedIn} setUser={this.setUser} />
                  </Route>
                </Fragment>
                  : <Fragment>
                    <Route exact path = '/' >
                      <FrontPage loggedIn={loggedIn} emojis={emojis} />
                    </Route>
                    
                      
                    <Route exact path='/emojis/:id' component={Emoji} />
                    
                  </Fragment>
              }
              
              

            </Switch>
          </main>
          <footer className="footer" onClick={ ()=> this.setMenu(false)}>
            
            <Footer />
          </footer>
          
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App
