import React, { Component } from 'react'
import axios from 'axios'
import FilmDetail from './1-1、filmDetail'
import '../css/filmItem.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      moviesData: [],
      moviesDetails:''
    }
    axios.get(`/test.json`).then(res => {
      this.setState({
        moviesData: res.data.data.films
      })
    })
  }
  render () {
    return (
      <div>
        {
          this.state.moviesData.map((item,index)=>
            <MoviesList key={index} {...item} onEvent={(val) => {
              this.setState({
                moviesDetails:val
              })
              console.log('父组件接受的val',val);
            }} ></MoviesList>
          )
        }
        <FilmDetail moviesDetails={this.state.moviesDetails } />
      </div>
    )
  }
}



 class MoviesList extends Component {
   render () {
     let { name,poster,synopsis} =this.props
    return (
      <div className='filmItem' onClick={() => {
        this.props.onEvent(synopsis)
      }}>
        <img src={poster} alt={ name}/>
        <h3>{name}</h3>
      </div>
    )
  }
}
