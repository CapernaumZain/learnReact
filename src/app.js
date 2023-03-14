import React, { Component } from 'react'
import Header from './components/header'
import Center from './components/center'
import Footer from './components/footer'
import './css/title.css'

export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        title:'电影'
      },
      {
        id: 2,
        title:'影院'
      },
      {
        id: 3,
        title:'我的'
      }
    ],
    current:0
  }
  which () {
    switch (this.state.current) {
      case 0:
        return <Header />
      case 1:
        return <Center />
      case 2:
        return <Footer />
      default:
        return null
    }
  }
  render () {
    return (
      <div style={{height:'60px'}}>
      {this.which()}
        <ul style={{ backgroundColor:'white'}}>
          {this.state.list.map((item,index) =>
            <li key={item.id} className={this.state.current === index ? 'active' : ''} onClick={() => {
              this.handleClick(index)
            }}>
             {item.title}
            </li>
          )}
      </ul>
      </div>
    )
  }
  handleClick (val) {
    this.setState({current:val})
  }
}
