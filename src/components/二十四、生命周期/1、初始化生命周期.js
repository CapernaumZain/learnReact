import React, { Component } from 'react'

export default class App extends Component {
  //1、将要把状态挂载到dom节点中
  componentWillMount () {
    //进行数据初始化操作
  }
  //2、已经把状态挂载到DOM节点中
  componentDidMount () {
    //进行数据请求
    //进行订阅操作
    //betterScroll
  }
  //3、正在挂载状态
  render() {
    return (
      <div>App</div>
    )
  }
}
