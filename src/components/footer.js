import React, { Component } from 'react'

export default class footer extends Component {
  render () {
    const footerStyle = {
      backgroundColor: 'blue',
      textAlign: 'center',
      color:'white'
    }
    return (
      <div style={footerStyle}>这是footer</div>
    )
  }
}
