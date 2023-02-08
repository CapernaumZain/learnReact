import React, { Component } from 'react'

export default class header extends Component {
  inputValueRef = React.createRef()
  state = {
    headerStateShow:true
  }
  render () {
    const headerStyle={
      backgroundColor: 'red',
      width: '100%',
      position: 'fixed',
      top: '0',
      color: 'white',
      textAlign: 'center'
    }
    return (
      <div style={headerStyle}>
        <input ref={ this.inputValueRef} />
        <button onClick={
          () => {
            this.Click()
          }
        }>
        {this.state.headerStateShow?'收藏':'取消收藏'}
        </button>
      </div>
    )
  }
  Click () {
    console.log('this.$refs.inputValue', this.inputValueRef.current.value);
    this.setState({
      headerStateShow:!this.state.headerStateShow
    })
  }
}
