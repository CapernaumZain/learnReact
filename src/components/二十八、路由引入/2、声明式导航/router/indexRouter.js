import React from 'react'
import { HashRouter, Route,Redirect,Switch } from 'react-router-dom'
import Header from '../views/Header'
import Center from '../views/Center'
import Footer from '../views/Footer'
import NotFind from '../views/NotFind'

export default function indexRouter() {
  return (
    <HashRouter>
          { this.props.children }
          <Switch>
            <Route path='/header' component={Header}></Route>
            <Route path='/center' component={Center}></Route>
            <Route path='/footer' component={Footer}></Route>
            {/* exact精确定向 */}
            {/* 模糊匹配 */}
            <Redirect from='/' to='/footer' exact></Redirect>
            <Route component={NotFind}></Route>
          </Switch>
      </HashRouter>
  )
}
