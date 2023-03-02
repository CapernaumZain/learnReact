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
  list:[],
  //订阅
  subscribe (callBack) {
    this.list.push(callBack)
  },

  //发布
  publish (text) {
    this.list.forEach(callBack => {
      callBack&&callBack()
    });
   }
}

//订阅者
bus.subscribe((value) => {
  console.log('1111111111');
})
bus.subscribe((value) => {
  console.log('2222222222');
})

//发布者
setTimeout(() => {
  bus.publish('男人看了流泪！')
},1000)
