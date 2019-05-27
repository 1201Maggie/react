import React,{Component} from "react";

import '../assets/css/banner.css'
import $ from 'jquery';
import Swipe from '../library/swipe';

class Swiper extends Component {
  render() {
    // let {banners} = this.props;
    return (
       <div class="aui-banner-content " className='swiper'>
          <div class="aui-banner-wrapper">
            <div class="aui-banner-wrapper-item">
              <a href="#"><img src="/img/news-banner2.jpg"/></a>
            </div>
            <div class="aui-banner-wrapper-item">
              <a href="#"><img src="/img/news-banner1.jpg"/></a>
            </div>
            <div class="aui-banner-wrapper-item">
              <a href="#"><img src="/img/news-banner3.jpg"/></a>
            </div>
            <div class="aui-banner-wrapper-item">
              <a href="#"><img src="/img/news-banner1.jpg"/></a>
            </div>
          </div>
          <div class="aui-banner-pagination"></div>
        </div> 
    );
  }

  // toDetail(id){
  //   //编程式跳转
  //   this.props.history.push({pathname:'/detail/'+id, search:'?dataName='+this.props.dataName})
  // }

  componentDidUpdate(){
    new Swipe($('.banner')[0],{
      auto:2000,
      continuous:true,
      stopPropation:true,
      callback:function (index,element){
        $('.banner ').removeClass('active');
        $('.banner ol li').eq(index).addClass('active');
      }
    })
  }
}

export default Swiper;