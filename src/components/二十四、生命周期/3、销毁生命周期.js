import React, { Component } from 'react'

export default class App extends Component {
  state = {
    componentState:true
  }
  render() {
    return (
      <div>
        {this.state.componentState===true&&<Child/>}
      </div>
    )
  }
}

class Child extends Component {
  render () {
    return (
      <div>Child</div>
    )
  }
}