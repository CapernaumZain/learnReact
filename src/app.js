import React, { Component } from 'react'
import Header from './components/header'
import Center from './components/center'
import Footer from './components/footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Center/>
        <Footer/>
      </div>
    )
  }
}
