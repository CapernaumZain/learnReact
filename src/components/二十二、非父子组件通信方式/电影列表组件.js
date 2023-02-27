import React, { Component } from 'react'

export default class MoviesList extends Component {

  render() {
    return (
      <div>
        <span>
          {this.props.name}
        </span>
      </div>
    )
  }
}
