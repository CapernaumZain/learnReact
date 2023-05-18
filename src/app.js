import React, { Component } from 'react'
import IndexRouters from './components/二十九、井字游戏/index'
import Tabbar from './components/二十八、路由引入/2、声明式导航/components/Tabbar'
export default class app extends Component {
  render() {
    return (
      <div>
        <IndexRouters>
          <Tabbar></Tabbar>
        </IndexRouters>
      </div>
    )
  }
}
