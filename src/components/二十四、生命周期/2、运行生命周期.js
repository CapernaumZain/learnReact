import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'

export default class App extends Component {
  state = {
    list:[]
  }
  componentDidMount () {
    axios.get(`/test.json`).then(res => {
      console.log('res',res.data.data.films);
      this.setState({
        list:res.data.data.films
      })
    })
  }
  render() {
    return (
      <div>
          <Child></Child>
        <div id='ulDiv' style={{ backgroundColor: 'red',height:'100px',overflow:'hidden'}}>
        <ul>
          {
            this.state.list.map(item =>
              <li key={item.filmId}>
                { item.name}
              </li>)
          }
          </ul>
        </div>

      </div>
    )
  }
  shouldComponentUpdate (newVal, newState) {
    /*  if (this.state.name !== newState.name) {
      return true
    } else {
      return false
    } */
    if (JSON.stringify(this.state) !== JSON.stringify(newState)) {
      return true
    } else {
      return false
    }
  }
  componentDidUpdate () {
    //更新DOM后的操作
    new BetterScroll('#ulDiv')
  }
}
class Child extends Component {
/*
!必须在子组件中使用
 */
  UNSAFE_componentWillReceiveProps (newVal) {
    //最先活得父组件传来的属性，可以利用属性进行ajax或者逻辑处理
    //把属性转换成孩子自己的状态
  }
  render () {
    return (
      <div>
        孩子组件
      </div>
    )
   }
}
