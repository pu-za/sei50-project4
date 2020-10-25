import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import FrontIndex from './components/FrontIndex'
import Login from './auth/Login'
import Register from './auth/Register'

class App extends React.Component {
  state = {
    loggedIn: false

  }



  setUser = () => {
    if (localStorage.getItem('token')) {
      this.setState({ loggedIn: true })
    } else {
      this.setState({ loggedIn: false })
    }
  }

  render() {

    const { loggedIn } = this.state
    return (
      <BrowserRouter>
        <Fragment>
          
          <header className="head">
            
            <Header loggedIn={loggedIn} setUser={this.setUser} />
          </header>
          
          <main className="main">
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
                      user logged in
                    </Route>
                  </Fragment>
              }
              
              

            </Switch>
          </main>
          <footer className="footer">
            
            <Footer />
          </footer>
          
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App
