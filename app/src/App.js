import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'
import Home from './pages/home'
import Builds from './pages/builds/index'
import ShowBuild from './pages/builds/show'
import NewBuild from './pages/builds/new'
import Products from './pages/products/index'
import ShowProduct from './pages/products/show'
import Cart from './pages/cart'
import history from './history'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import customTheme from './theme.js'
import ScrollToTop from './ScrollToTop'

const App = props => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
      <Router history={history}>
        <ScrollToTop>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/builds/new" component={NewBuild} />
              <Route path="/builds/:id" component={ShowBuild} />
              <Route path="/builds" component={Builds} />
              <Route path="/products/:id" component={ShowProduct} />
              <Route path="/products" component={Products} />
              <Route path="/cart" component={Cart} />
            </Switch>
          </div>
        </ScrollToTop>
      </Router>
    </MuiThemeProvider>
  )
}

export default App
