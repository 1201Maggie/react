import React,{Component} from "react";
import '../assets/css/Discover.css'
import Footer from '../layouts/Footer'
import {Link} from "react-router-dom"
import axios from 'axios';

class Discover extends Component {
    state={
        home:[]
    };
  render() {
    return (
      <>
        <header className="aui-header-default aui-header-fixed ">
            <a href="#" className="aui-header-item">
                <i className="aui-icon aui-icon-back"></i>
            </a>
            <div className="aui-header-center aui-header-center-clear">
                <div className="aui-header-center-logo">
                    <div><img src="/img/icon-dis.png" alt=""/></div>
                </div>
            </div>
            <a href="#" className="aui-header-item-icon">
                <i className="aui-icon aui-icon-packet"></i>
                <i className="aui-icon aui-icon-member"></i>
            </a>
        </header>
        <section className="n-tabs">
            <ul className="n-tabContainer" id="auto-id-1509603311057">
                <li className="n-tabItem" data-id="homepage">
                    <a href="#" id="homepage" className="current">精选</a>
                </li>
                <li className="n-tabItem" data-id="44114">
                    <a href="#" id="44114" className="">直播</a>
                </li>
                <li className="n-tabItem" data-id="15394">
                    <a href="#" id="15394" className="">视频购</a>
                </li>
                <li className="n-tabItem" data-id="01436">
                    <a href="#" id="01436" className="">社区</a>
                </li>
                <li className="n-tabItem" data-id="18211">
                    <a href="#" id="18211" className="">家居生活</a>
                </li>
                <li className="n-tabItem" data-id="83651">
                    <a href="#" id="83651" className="">生鲜</a>
                </li>
                <li className="n-tabItem" data-id="37957">
                    <a href="#" id="37957" className="">数码</a>
                </li>
                <li className="n-tabItem" data-id="74029">
                    <a href="#" id="74029" className="">个人洗护</a>
                </li>
                <li className="n-tabItem" data-id="73179">
                    <a href="#" id="73179" className="">海外直邮</a>
                </li>
                <li className="n-tabItem" data-id="41804">
                    <a href="#" id="41804" className="">服饰鞋靴</a>
                </li>
            </ul>
        </section>
        <div className="aui-content-box" style={{paddingTop:41}}>
            <div className="aui-banner-content aui-fixed-top" data-aui-slider>
                <div className="aui-banner-wrapper">
                    <div className="aui-banner-wrapper-item">
                        <a href="#">
                            <img src="/img/find-2.jpg"/>
                        </a>
                    </div>
                    <div className="aui-banner-wrapper-item">
                        <a href="#">
                            <img src="/img/find-1.jpg"/>
                        </a>
                    </div>
                    <div className="aui-banner-wrapper-item">
                        <a href="#">
                            <img src="/img/find-3.jpg"/>
                        </a>
                    </div>
                </div>
                <div className="aui-banner-pagination"></div>
            </div>
            <section className="aui-card-content">
                <div className="aui-card-box">
                    <div className="aui-card-box-user">
                        <img src="/img/user0.png" alt=""/>
                    </div>
                    <div className="aui-card-box-name">
                        <h2 className="aui-card-box-name">时尚优购店铺</h2>
                        <span className="aui-card-box-btn">关注</span>
                    </div>
                    <div className="aui-card-box-time">9月10日发布</div>
                </div>
                <div className="aui-card-media-inner">
                    <div className="aui-card-media-inner-title">双11你的购物车我全包了</div>
                    <div className="aui-card-media-inner-padded">
                        <div className="aui-card-media-inner-col-xs-3">
                            <img src="/img/sf-7.jpg" alt=""/>
                        </div>
                        <div className="aui-card-media-inner-col-xs-3">
                            <img src="/img/sf-5.jpg" alt=""/>
                        </div>
                        <div className="aui-card-media-inner-col-xs-3">
                            <img src="/img/sf-6.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
		    <div className="aui-dri"></div>
            <section className="aui-card-content">
                <div className="aui-card-box">
                    <div className="aui-card-box-user">
                        <img src="/img/user9.png" alt=""/>
                    </div>
                    <div className="aui-card-box-name">
                        <h2 className="aui-card-box-name">艾畅的家族</h2>
                        <span className="aui-card-box-btn">关注</span>
                    </div>
                    <div className="aui-card-box-time">9月10日发布</div>
                </div>
                <div className="aui-card-media-inner">
                    <div className="aui-card-media-inner-title">双11你的购物车我全包了</div>
                    <div className="aui-card-media-inner-padded">
                        <div className="aui-card-media-inner-col-xs-3">
                            <img src="/img/pd-zf-6.jpg" alt=""/>
                        </div>
                        <div className="aui-card-media-inner-col-xs-3">
                            <img src="/img/pd-zf-7.jpg" alt=""/>
                        </div>
                        <div className="aui-card-media-inner-col-xs-3">
                            <img src="/img/pd-zf-8.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
		    <div className="aui-dri"></div>
            <section className="aui-card-content">
                <div className="aui-card-box">
                    <div className="aui-card-box-user">
                        <img src="/img/user2.png" alt=""/>
                    </div>
                    <div className="aui-card-box-name">
                        <h2 className="aui-card-box-name">轻量科技</h2>
                        <span className="aui-card-box-btn">关注</span>
                    </div>
                    <div className="aui-card-box-time">11月10日前</div>
                </div>
                <div className="aui-card-media">
                    <div className="aui-card-media-item">
                        <img src="/img/sf-18.jpg" />
                    </div>
                    <div className="aui-card-media-inner">
                        <div className="aui-card-media-text">
                            <p>时尚女神节 抢5折优惠券转身变女神 你想要的这里都有</p>
                        </div>
                        <div className="aui-card-media-describe">
                            <span>1.1万人浏览 2390件宝贝</span>
                        </div>
                    </div>
                </div>
                <div className="aui-card-media">
                    <div className="aui-card-media-item">
                        <img src="/img/sf-9.jpg" />
                    </div>
                    <div className="aui-card-media-inner">
                        <div className="aui-card-media-text">
                            <p>时尚女神节 抢5折优惠券转身变女神 你想要的这里都有</p>
                        </div>
                        <div className="aui-card-media-describe">
                            <span>1.1万人浏览 2390件宝贝</span>
                        </div>
                    </div>
                </div>
                <div className="aui-card-media">
                    <div className="aui-card-media-item">
                        <img src="/img/sf-22.jpg" />
                    </div>
                    <div className="aui-card-media-inner">
                        <div className="aui-card-media-text">
                            <p>每日坚果750g零食果干无添加混合坚果孕妇食品小</p>
                        </div>
                        <div className="aui-card-media-describe">
                            <span>1.1万人浏览 2390件宝贝</span>
                        </div>
                    </div>
                </div>
            </section>
		    <div className="aui-dri"></div>
            <section className="aui-card-content">
                <div className="aui-card-box">
                    <div className="aui-card-box-user">
                        <img src="/img/user4.png" alt=""/>
                    </div>
                    <div className="aui-card-box-name">
                        <h2 className="aui-card-box-name">艾佳生活</h2>
                        <span className="aui-card-box-btn">关注</span>
                    </div>
                    <div className="aui-card-box-time">10月10日发布</div>
                </div>
                <div className="aui-card-media">
                    <div className="aui-card-media-item">
                        <img src="/img/sf-10.jpg" />
                    </div>
                    <div className="aui-card-media-inner">
                        <div className="aui-card-media-text">
                            席梦思（Simmons） 原装进口独立袋弹簧 软硬适中 艾乔安娜承托 灰蓝白 1500*2000*280灰蓝白 1500*2000*280
                        </div>
                        <div className="aui-card-media-describe">
                            <span>1.1万人浏览 2390件宝贝</span>
                        </div>
                    </div>
                </div>
            </section>
		    <div className="aui-dri"></div>
            <section className="aui-card-content">
                <div className="aui-card-box">
                    <div className="aui-card-box-user">
                        <img src="/img/user3.png" alt=""/>
                    </div>
                    <div className="aui-card-box-name">
                        <h2 className="aui-card-box-name">小虾米</h2>
                        <span className="aui-card-box-btn">关注</span>
                    </div>
                    <div className="aui-card-box-time">10月10日发布</div>
                </div>
                <div className="aui-card-media">
                    <div className="aui-card-media-item">
                        <img src="/img/sf-19.jpg" />
                    </div>
                    <div className="aui-card-media-inner">
                        <div className="aui-card-media-text">
                            席梦思（Simmons） 原装进口独立袋弹簧 软硬适中 艾乔安娜承托 灰蓝白 1500*2000*280灰蓝白 1500*2000*280
                        </div>
                        <div className="aui-card-media-describe">
                            <span>1.1万人浏览 2390件宝贝</span>
                        </div>
                    </div>
                </div>
                <div className="aui-card-media">
                    <div className="aui-card-media-item">
                        <img src="/img/sf-11.jpg" />
                    </div>
                    <div className="aui-card-media-inner">
                        <div className="aui-card-media-text">
                            ML权力的游戏史塔克家族徽章印花短袖T恤1700140 黑色AK权力的游戏史塔克家族徽章印花短袖T恤1700140 黑色 L
                        </div>
                        <div className="aui-card-media-describe">
                            <span>1.1万人浏览 2390件宝贝</span>
                        </div>
                    </div>
                </div>
            </section>
		    <div className="aui-dri"></div>
            <section className="aui-card-content">
                <div className="aui-card-box">
                    <div className="aui-card-box-user">
                        <img src="/img/user2.png" alt=""/>
                    </div>
                    <div className="aui-card-box-name">
                        <h2 className="aui-card-box-name">每天都坚果一下</h2>
                        <span className="aui-card-box-btn">关注</span>
                    </div>
                    <div className="aui-card-box-time">10月10日发布</div>
                </div>
                <div className="aui-card-media">
                    <div className="aui-card-media-item">
                        <img src="/img/sf-8.jpg" />
                    </div>
                    <div className="aui-card-media-inner">
                        <div className="aui-card-media-text">
                            沃隆 每日坚果750g零食果干无添加混合坚果孕妇食品小包装礼盒 成人A款=25g*30袋
                        </div>
                        <div className="aui-card-media-describe">
                            <span>1.1万人浏览 2390件宝贝</span>
                        </div>
                    </div>
                </div>
            </section>
		    <div className="aui-dri" style={{marginBottom:20}}></div>
            <div className="aui-list-content">
                <div className="aui-list-item">
                    <div className="aui-list-item-img">
                        <img src="/img/cf-6.jpg" alt=""/>
                    </div>
                    <div className="aui-slide-box">
                        <div className="aui-slide-list">
                            <ul className="aui-slide-item-list">
                                <li className="aui-slide-item-item">
                                    <a href="#" className="v-link">
                                        <img className="v-img" src="/img/sf-20.jpg"/>
                                        <p className="aui-slide-item-title aui-slide-item-f-els">nissen 凹凸纵横弹性沙发套</p>
                                        <p className="aui-slide-item-info">
                                            <span className="aui-slide-item-price">¥31149</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥11499</span>
                                        </p>
                                    </a>
                                </li>
                                <li className="aui-slide-item-item">
                                    <a href="#" className="v-link">
                                        <img className="v-img" src="/img/sf-21.jpg"/>
                                        <p className="aui-slide-item-title aui-slide-item-f-els">日本NITORI尼达利 三折坐垫 长毛条纹 浅棕 </p>
                                        <p className="aui-slide-item-info">
                                            <span className="aui-slide-item-price">¥1199</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥1198</span>
                                        </p>
                                    </a>
                                </li>
                                <li className="aui-slide-item-item">
                                    <a href="#" className="v-link">
                                        <img className="v-img" src="/img/sf-22.jpg"/>
                                        <p className="aui-slide-item-title aui-slide-item-f-els">商城精选 对伴沙发</p>
                                        <p className="aui-slide-item-info">
                                            <span className="aui-slide-item-price">¥2399</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥9999</span>
                                        </p>
                                    </a>
                                </li>
                                <li className="aui-slide-item-item">
                                    <a href="#" className="v-link">
                                        <img className="v-img" src="/img/sf-23.jpg"/>
                                        <p className="aui-slide-item-title aui-slide-item-f-els">商城精选 韵白系列沙发三人位</p>
                                        <p className="aui-slide-item-info">
                                            <span className="aui-slide-item-price">¥9189</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥21299</span>
                                        </p>
                                    </a>
                                </li>
                                <li className="aui-slide-item-item">
                                    <a href="#" className="v-link">
                                        <img className="v-img" src="/img/sf-24.jpg"/>
                                        <p className="aui-slide-item-title aui-slide-item-f-els">商城精选 韵白系列沙发单人位</p>
                                        <p className="aui-slide-item-info">
                                            <span className="aui-slide-item-price">¥2349</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥4199</span>
                                        </p>
                                    </a>
                                </li>
                                <li className="aui-slide-item-item">
                                    <a href="#" className="v-link">
                                        <img className="v-img" src="/img/sf-24.jpg"/>
                                        <p className="aui-slide-item-title aui-slide-item-f-els">商城精选 韵白系列沙发单人位</p>
                                        <p className="aui-slide-item-info">
                                            <span className="aui-slide-item-price">¥2349</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥4199</span>
                                        </p>
                                    </a>
                                </li>
                                <li className="aui-slide-item-item">
                                    <a href="#" className="v-link">
                                        <img className="v-img" src="/img/sf-24.jpg"/>
                                        <p className="aui-slide-item-title aui-slide-item-f-els">商城精选 韵白系列沙发单人位</p>
                                        <p className="aui-slide-item-info">
                                            <span className="aui-slide-item-price">¥2349</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥4199</span>
                                        </p>
                                    </a>
                                </li>
						    </ul>
					    </div>
				    </div>
                    <div className="aui-slide-box">
                        <div className="aui-slide-list">
                            <ul className="aui-slide-item-list">
                                <li className="aui-slide-item-item">
                                    <a href="#" className="v-link">
                                        <img className="v-img" src="/img/sf-19.jpg"/>
                                        <p className="aui-slide-item-title aui-slide-item-f-els">nissen 凹凸纵横弹性沙发套</p>
                                        <p className="aui-slide-item-info">
                                            <span className="aui-slide-item-price">¥31149</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥11499</span>
                                        </p>
                                    </a>
                                </li>
                                <li className="aui-slide-item-item">
                                    <a href="#" className="v-link">
                                        <img className="v-img" src="/img/sf-18.jpg"/>
                                        <p className="aui-slide-item-title aui-slide-item-f-els">日本NITORI尼达利 三折坐垫 长毛条纹 浅棕 </p>
                                        <p className="aui-slide-item-info">
                                            <span className="aui-slide-item-price">¥1199</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥1198</span>
                                        </p>
                                    </a>
                                </li>
                                <li className="aui-slide-item-item">
                                    <a href="#" className="v-link">
                                        <img className="v-img" src="/img/sf-17.jpg"/>
                                        <p className="aui-slide-item-title aui-slide-item-f-els">商城精选 对伴沙发</p>
                                        <p className="aui-slide-item-info">
                                            <span className="aui-slide-item-price">¥2399</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥9999</span>
                                        </p>
                                    </a>
                                </li>
                                <li className="aui-slide-item-item">
                                    <a href="#" className="v-link">
                                        <img className="v-img" src="/img/sf-16.jpg"/>
                                        <p className="aui-slide-item-title aui-slide-item-f-els">商城精选 韵白系列沙发三人位</p>
                                        <p className="aui-slide-item-info">
                                            <span className="aui-slide-item-price">¥9189</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥21299</span>
                                        </p>
                                    </a>
                                </li>
                                <li className="aui-slide-item-item">
                                    <a href="#" className="v-link">
                                        <img className="v-img" src="/img/sf-15.jpg"/>
                                        <p className="aui-slide-item-title aui-slide-item-f-els">商城精选 韵白系列沙发单人位</p>
                                        <p className="aui-slide-item-info">
                                            <span className="aui-slide-item-price">¥2349</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥4199</span>
                                        </p>
                                    </a>
                                </li>
                                <li className="aui-slide-item-item">
                                    <a href="#" className="v-link">
                                        <img className="v-img" src="/img/sf-15.jpg"/>
                                        <p className="aui-slide-item-title aui-slide-item-f-els">商城精选 韵白系列沙发单人位</p>
                                        <p className="aui-slide-item-info">
                                            <span className="aui-slide-item-price">¥2349</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥4199</span>
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
				    </div>
			    </div>
		    </div>
            <div className="aui-recommend"><img src="/img/icon-tj2.jpg" alt=""/></div>
            <section className="aui-list-product">
                <div className="aui-list-product-box">               
                    {this.state.home.map(item => (
                        <Link to='/List' className="aui-list-product-item" key={item.id}>
                            <div className="aui-list-product-item-img" ><img src={item.des}/></div>
                            <div className="aui-list-product-item-text">
                            <h3>{item.title}</h3>
                            <div className="aui-list-product-mes-box"><div>
                                <span className="aui-list-product-item-price"><em>¥</em>{item.detail.price}</span>
                                <span className="aui-list-product-item-del-price">¥{item.detail.old_price}</span>
                            </div>
                                <div className="aui-comment">{item.detail.eva}</div>
                            </div>
                            </div>
                        </Link>
                        ))
                    }
                </div>
            </section>
        </div>
        <Footer/>
    </>
    );
  }

async componentDidMount(){

    let resHome = await axios({url:'/mock/home',params:{_limit:16}});
    this.setState({home:resHome.data.page_data})
    }
  }

export default Discover;