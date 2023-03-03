import React, { Component } from 'react'
import axios from 'axios'
import '../css/filmItem.css'
//定义发布订阅模式
var bus = {
  //调度中心
  list: [],
  //订阅方法
  subscribe (callBack) {
    this.list.push(callBack)
  },
  //发布方法
  publish (text) {
    this.list.forEach(callBack => {
      callBack&&callBack(text)
    })
   }
}
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      moviesData: []
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
          this.state.moviesData.map((item, index) =>
            <MoviesList key={index} {...item}></MoviesList>)
        }
        <FilmDetail/>
      </div>
    )
  }
}

 class MoviesList extends Component {
   render () {
     let {poster,name, synopsis} =this.props
    return (
      <div className='filmItem' onClick={() => {
        //调用发布函数
        bus.publish(synopsis)
      }}>
        <img src={poster} alt={name}></img>
        <h1>{ name}</h1>
      </div>
    )
  }
}
class FilmDetail extends Component {
  state = {
    details: '',
  }
  constructor() {
    super()
    //调用订阅函数
    bus.subscribe((detail) => {
      console.log('我在filmDetail中定义', detail);
      this.setState({
        details: detail
      })
    })
  }
   render () {
    return (
      <div className='filmItemDetail'>
        <p>{this.state.details}</p>
      </div>
    )
  }
}
