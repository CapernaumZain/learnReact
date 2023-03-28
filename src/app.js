import React, { Component } from 'react'
import { HashRouter, Route,Redirect,Switch } from 'react-router-dom'
import Header from './router/Header'
import Center from './router/Center'
import Footer from './router/Footer'
import NotFind from './router/NotFind'
export default class app extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
          <Route path='/header' component={Header}></Route>
          <Route path='/center' component={Center}></Route>
            <Route path='/footer' component={Footer}></Route>
            {/* exact精确定向 */}
          <Redirect from='/' to='/footer' exact></Redirect>
          <Route component={NotFind}></Route>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
