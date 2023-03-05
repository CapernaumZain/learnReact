import React, { Component } from 'react'

class Child extends Component {
  render () {
    return (
      <div className=''>
      {this.props.children}
    </div>
    )
  }
}
export default class App extends Component {
  render() {
    return (
      <div>
        <Child>
          <div>
            插槽应该显示的内容
          </div>
        </Child>
      </div>
    )
  }
}
