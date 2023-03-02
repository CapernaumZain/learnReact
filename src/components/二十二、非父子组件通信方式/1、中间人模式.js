import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    state = {
      moviesData: []
    }
  constructor() {
    super()
    axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=929717',
        headers:{
          'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"167644485072395968741377","bc":"110100"}',
          'X-Host':'mall.film-ticket.cinema.list'
        }
    }).then(res => {
      console.log(res.data.data.cinemas)
      this.setState({
        moviesData: res.data.data.cinemas
      })
    })
  }
  render () {
    return (
      <div>
        {
          this.state.moviesData[1].name
       /*  // eslint-disable-next-line
          this.state.moviesData.map(item=> {
            <MoviesList key={item.cityId} name={item.name} ></MoviesList>
           }) */
        }
      </div>
    )
  }
}



/*  class MoviesList extends Component {
   render () {
     let { name} =this.props
    return (
      <div>
        wwwwwwwwwwwwwwwwwwwwwww
        <h1>{name}</h1>
      </div>
    )
  }
} */
