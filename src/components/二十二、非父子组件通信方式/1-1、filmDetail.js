import React, { Component } from 'react'
import '../css/filmItem.css'

export default class filmDetail extends Component {
  render () {
    let { moviesDetails}=this.props
    return (
      <div className='filmItemDetail'>
        {moviesDetails}
      </div>
    )
  }
}
