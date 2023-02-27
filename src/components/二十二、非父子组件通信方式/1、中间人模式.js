import React, { Component } from 'react'
import axios from 'axios'
import MoviesList from './电影列表组件'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      moviesData: []
    }
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
  render() {
    return (
      <div>
        {
           //eslint-disable-next-line
          this.state.moviesData.map((item,index)=> {
            <MoviesList key={index} name={item.name} />
           })
        }
      </div>
    )
  }
}
