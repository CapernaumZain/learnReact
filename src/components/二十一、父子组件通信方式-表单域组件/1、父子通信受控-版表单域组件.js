import React, { Component } from 'react'
import Field from './用户名密码组件'

export default class App extends Component {
  state = {
    userName: '默认用户名',
    password: '默认密码'
  }
  render() {
    return (
      <div>
        <h1>登录页面</h1>
        <Field label='用户名' type='text' onChangeEvt={(evt) => {
          console.log('用户名', evt);
          this.setState({
            userName: evt
          })
        }} value={ this.state.userName} />
        <Field label='密码' type='password' onChangeEvt={(evt) => {
          console.log('密码', evt);
          this.setState({
            password: evt
          })
        }} value={ this.state.password} />
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
    console.log('得到用户名密码:',this.state.userName,this.state.password);
  }
  cancel () {
    this.setState({
      userName: '',
      password: ''
    })
  }
}
