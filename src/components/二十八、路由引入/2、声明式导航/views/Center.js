import React from 'react'
import { Route,Switch,Redirect } from 'react-router-dom'
import Info from './Center/Info'
import Info2 from './Center/Info2'
import NotFind from './NotFind'

export default function Center() {
  return (
    <div>
      <div style={{ height: "400px", backgroundColor: "green" }}></div>
      <div style={{backgroundColor:"yellow"}}>
          center
      </div>
      <Switch>
        <Route path='/Center/Info' component={Info}></Route>
        <Route path='/Center/Info2' component={Info2}></Route>
        <Redirect from='/Center/' to='/Center/Info' exact></Redirect>
        <Route component={NotFind}/>
      </Switch>
    </div>
  )
}
