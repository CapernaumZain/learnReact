import React, { Component } from 'react'

export default class header extends Component {
  render () {
    const headerStyle={
      backgroundColor: 'red',
      width:'100%',
      position: 'fixed',
      top:'0',
      color: 'white',
      textAlign: 'center'
    }
    return (
      <div style={headerStyle}>
        <div>这是header这是header这是header这是header</div>
      </div>
    )
  }
}
