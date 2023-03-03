import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>app</div>
    )
  }
}


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

//订阅者
bus.subscribe((value) => {
  console.log('1111111111',value);
})
bus.subscribe((value) => {
  console.log('2222222222',value);
})

//发布者
setTimeout(() => {
  bus.publish('男人看了流泪！')
},1000)
