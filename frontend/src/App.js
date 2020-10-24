import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import FrontIndex from './components/FrontIndex'
import Login from './auth/Login'

class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          
          <header className="head">
            
            <Header />
          </header>
          
          <main className="main">
            <Switch>

              <Route exact path = '/' >
                <FrontIndex />
              </Route>
              <Route exact path='/login'>
                <Login />
              </Route>
              

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
