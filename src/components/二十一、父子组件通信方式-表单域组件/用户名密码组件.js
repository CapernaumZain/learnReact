import React, { Component } from 'react'


//!1、父子通信受控-版表单域组件
export default class Field extends Component {
  render() {
    return (
      <div style={{backgroundColor:'green'}}>
        <label>{this.props.label}</label>
        <input type={this.props.type} onChange={evt => {
          this.props.onChangeEvt(evt.target.value)
        }} value={ this.props.value} />
      </div>
    )
  }
}


/* export default class Field extends Component {
  state = {
    value:''
  }

  clear () {
    this.setState({
      value:''
    })
  }
  render() {
    return (
      <div style={{backgroundColor:'green'}}>
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          onChange={(evt => { this.setState({ value: evt.target.value }) })}
          value={this.state.value} />
      </div>
    )
  }
} */