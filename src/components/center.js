import React, { Component } from 'react'
import axios from 'axios'

export default class center extends Component {
  state = {
    list:[]
  }
  /* es6构造函数 */
  constructor() {
    super()
    axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=929717',
        headers:{
          'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"167644485072395968741377","bc":"110100"}',
          'X-Host':'mall.film-ticket.cinema.list'
        }
    }).then(res => {
      console.log('res',res);
      this.setState({
        list: res.data.data.cinemas
      })
    }).catch(err => {
      console.log('err',err);
    })
  }
  render () {
    const ellipsis = {
      width:'12em' ,          /*设置显示宽度*/
      whiteSpace: 'nowrap',     /*文本不换行。*/
      overflow: 'hidden',       /* 超过部分隐藏*/
      textOverflow: 'ellipsis', /*超过部分用...代替*/
      fontSize: '15px',
      textAlign: 'left',
      color: 'black',
      marginBottom: '3px'
    }
    const subEllipsis = {
      width:'15em' ,          /*设置显示宽度*/
      whiteSpace: 'nowrap',     /*文本不换行。*/
      overflow: 'hidden',       /* 超过部分隐藏*/
      textOverflow: 'ellipsis', /*超过部分用...代替*/
      fontSize: '12px',
      textAlign: 'left',
      color: '#797d82',
      marginBottom: '5px'
    }
    const lowPrice = {
      fontSize: '12px',
      textAlign: 'right',
      height: '36px',
      color:'red',
      marginBottom: '8px'
    }
    const titleStyle = {
      display: 'flex',
      flexDirection: 'column',
      borderBottom: '1px solid #ededed',
      color: '#797d82'
    }
    const titleList = this.state.list.map(item =>
      <div key={item.cinemaId} style={titleStyle }>
        <div style={ellipsis}>{item.name}</div>
        <div style={subEllipsis}>{item.address}</div>
      </div>)
    const titlePriceList = this.state.list.map(item =>
      <div key={item.cinemaId} style={titleStyle }>
        <div style={lowPrice}>{Number(item.lowPrice)/100+'元起'}</div>
       {/* <div style={subEllipsis}>{item.address}</div> */}
      </div>)
    const oneTitle = {
      padding: '10px',
      fontSize: '20px',
      display:'flex'
    }
    const twoTitle = {
        flex:1
    }
    return (
      /*!Header And Center*/
      <div>
    {/*Header*/}
        <div style={{width:'100%',position:'fixed',top: '0',zIndex: '1000',backgroundColor:'white',height:'80px'}}>
          <div style={oneTitle}>
            <span style={{flex:1}}>北京</span>
            <span style={{flex:8}}>影院</span>
            <input style={{ flex: 1,borderRadius:'12px',placeholder:'请输入影院信息' }}></input>
          </div>
          <hr/>
          <div style={{ display: 'flex' }}><span style={twoTitle}>全城</span><span style={twoTitle}>APP订票</span><span style={twoTitle}>最近去过</span></div>
        </div>
      {/*Center*/}
        <div style={{ display: 'flex', flexDirection: 'row', padding: '15px',paddingTop:'85px',paddingBottom:'50px' }}>
        <div>
        { titleList }
        </div>
        <div style={ {width:'100%'}}>
          {titlePriceList}
        </div>
        </div>
      </div>
    )
  }
}