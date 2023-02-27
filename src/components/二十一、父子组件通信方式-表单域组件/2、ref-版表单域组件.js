import React, { Component } from 'react'
import Field from './用户名密码组件'

export default class App extends Component {
  state = {
    userName: '默认用户名',
    password: '默认密码'
  }

  userName = React.createRef()
  password = React.createRef()

  render() {
    return (
      <div>
        <h1>登录页面</h1>
        <Field label='用户名' type='text' ref={this.userName} />
        <Field label='密码' type='password' ref={this.password} />
        <button onClick={() => {
          this.login()
        }}>
          登录
        </button>
        <button onClick={
          () => {
           this.cancel()
          }}>
          取消
        </button>
      </div>
    )
  }
  login () {
    console.log('得到用户名密码:',this.userName.current.state.value,this.password.current.state.value);
  }
  cancel () {
    this.userName.current.clear()
    this.password.current.clear()
  }
}
