import React, { Component } from 'react'
import axios from 'axios'
import MSwiper from './components/Swiper'
import SwiperItem from './components/swiperItem'

export default class App extends Component {
  state = {
    moviesData: []
  }
  componentDidMount () {
    /* setTimeout(() => {
      this.setState({
        list: ['aaaaa','bbbbb','ccccc']
       })
    }, 1000) */
    axios.get(`/test.json`).then(res => {
      this.setState({
        moviesData: res.data.data.films[0].actors
      })
    })
  }
  render() {
    return (
      <div>
        <MSwiper loop={ false}>
          {
            this.state.moviesData.map(item => <SwiperItem key={item.role}>
              <img src={item.avatarAddress} alt={item.name} style={{height:'100%', width:'100%'}} />
            </SwiperItem>)
          }
        </MSwiper>
      </div>
    )
  }
}
