import React, { Component } from 'react'

class child extends Component {
  render () {
    return (
      <div className=''>
      child
    </div>
    )
  }
}
export default class slot extends Component {
  render() {
    return (
      <div>
        <child>
          <div>
            ssssssssssss
          </div>
        </child>
      </div>
    )
  }
}
