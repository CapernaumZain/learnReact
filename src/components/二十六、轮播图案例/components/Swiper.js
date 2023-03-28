import React, { Component } from 'react'
// import Swiper bundle with all modules installed
  import Swiper from 'swiper/bundle';
  // import styles bundle
  import 'swiper/css/bundle';

export default class MSwiper extends Component {

  componentDidMount () {
      new Swiper('.swiper', {
     // 如果需要分页器
      pagination: {
      el: '.swiper-pagination',
        },
        loop: this.props.loop
    })
  }

  render() {
    return (
      <div>
        <div className="swiper" style={{height:'500px',background:'green'}} >
          <div className="swiper-wrapper">
            {
            this.props.children
            }
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-scrollbar"></div>
        </div>
      </div>
    )
  }
}
