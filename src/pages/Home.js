import React,{Component} from "react";
import {Carousel} from 'antd-mobile'
import Footer from '../layouts/Footer'
import {Link} from "react-router-dom"

import axios from 'axios';

class Home extends Component {
  state={
    home:[],
    data: ['1', '2', '3'],
    imgHeight: 176,
  };

  render() {
  return(
    <React.Fragment>
      <header className="aui-header-default aui-header-fixed aui-header-clear-bg">  
        <a href="#" className="aui-header-item">
          <i className="aui-icon aui-icon-code"></i>
        </a>
        <div className="aui-header-center aui-header-center-clear"  style={{marginRight:50}}>
          <div className="aui-header-search-box" style={{backgroundColor:'#fff'}}>
            <i className="aui-icon aui-icon-small-search"></i>
            <input type="text" className="aui-header-search"/>
          </div>
        </div>
        <a href="#" className="aui-header-item-icon" style={{position:'absolute',right:-35,top:0}}>
          <i className="aui-icon aui-icon-member-1"></i>
        </a>
        <div id="scrollBg"></div>
      </header>
      <div className="aui-content-box">
        {/* 轮播图 */}
        <div className="aui-banner-content " data-aui-slider>
          <div className="aui-banner-wrapper">
            <div className="aui-banner-wrapper-item">
              {/* <a href="#"><img src='/img/banner.jpg'/></a> */}
              {/*走马灯*/}
        <Carousel
          autoplay={true}
          infinite
          // 循环和自动播放
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <Link
              to={'/detail'}
              key={val}
              style={{display: 'inline-block', width: '100%', height:this.state.imgHeight}}
            >
              <img
                alt=""
                src={`/img/${val}.jpg`}
                style={{width: '100%', verticalAlign: 'top'}}
              />
            </Link>
          ))}
        </Carousel>
            </div>
          </div>
          <div className="aui-banner-pagination"></div>
        </div> 
        <section className="aui-grid-content">
          <div className="aui-grid-row aui-grid-row-clears"> 
            <a href="javascript:;" className="aui-grid-row-item">
              <i className="aui-icon-large aui-icon-sign"></i>
              <p className="aui-grid-row-label">每日签到</p>
            </a>
            <a href="javascript:;" className="aui-grid-row-item">
              <i className="aui-icon-large aui-icon-time"></i>
              <p className="aui-grid-row-label">限时抢购</p>
            </a>
            <a href="javascript:;" className="aui-grid-row-item">
              <i className="aui-icon-large aui-icon-vip"></i>
              <p className="aui-grid-row-label">会员专享</p>
            </a>
            <a href="javascript:;" className="aui-grid-row-item">
              <i className="aui-icon-large aui-icon-group"></i>
              <p className="aui-grid-row-label">好货拼团</p>
            </a>
            <a href="javascript:;" className="aui-grid-row-item">
              <i className="aui-icon-large aui-icon-share"></i>
              <p className="aui-grid-row-label">分享领券</p>
            </a>
            <a href="javascript:;" className="aui-grid-row-item">
              <i className="aui-icon-large aui-icon-recharges"></i>
              <p className="aui-grid-row-label">手机充值</p>
            </a>
            <a href="javascript:;" className="aui-grid-row-item">
              <i className="aui-icon-large aui-icon-finance"></i>
              <p className="aui-grid-row-label">金融理财</p>
            </a>
            <a href="javascript:;" className="aui-grid-row-item">
              <i className="aui-icon-large aui-icon-appliance"></i>
              <p className="aui-grid-row-label">电器商城</p>
            </a>
            <a href="javascript:;" className="aui-grid-row-item">
              <i className="aui-icon-large aui-icon-supermarket"></i>
              <p className="aui-grid-row-label">萌宝超市</p>
            </a>
            <a href="javascript:;" className="aui-grid-row-item">
              <i className="aui-icon-large aui-icon-personal"></i>
              <p className="aui-grid-row-label">个人中心</p>
            </a>
          </div>
        </section>
        <section className="aui-content-six aui-border-t " style={{backgroundColor: '#fff'}}>
          <div className="aui-flex-col aui-flex-center aui-border-tb">
            <div className="aui-flex-item-4 aui-flex-row aui-flex-middle aui-padded-10 aui-border-b">
              <h3 className="aui-text-danger">电器城抢购</h3>
              <p>全场低至299</p>
              <img src="/img/f1.jpg"/>
            </div>
            <div className="aui-flex-item-8 aui-border-l">
              <div className="aui-flex-col aui-padded-10 aui-border-b">
                <div className="aui-flex-item-12">
                  <div className="aui-flex-item-9">
                    <h3 className="aui-text-info">创维新品</h3>
                    <p>好品质选创维新品上市</p>
                  </div>
                  <div className="aui-flex-item-3 aui-text-right"><img src="/img/f2.jpg"/></div>
                </div>
              </div>
              <div className="aui-flex-col aui-border-b">
                <div className="aui-flex-item-6 aui-padded-10 " style={{position: 'relative'}}>
                  <h5 className="aui-text-warning">拍摄一族</h5>
                  <p>喜欢旅游拍摄</p>
                  <img src="/img/f3.jpg"/>
                </div>
                <div className="aui-flex-item-6 aui-padded-10 aui-border-l ">
                  <h5 className="aui-text-success">每日坚果</h5>
                  <p>每天补充一下</p>
                  <img src="/img/f5.jpg"/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="aui-avd-content clearfix">
          <a href="#">
            <img src="/img/cf-1.jpg" alt=""/>
          </a>
          <a href="#">
            <img src="/img/cf-3.jpg" alt=""/>
          </a>
        </div>
        <div className="aui-title-head">
          <img src="/img/i-i1.png"  alt=""/>
        </div>
        <div className="aui-slide-box aui-slide-box-clear">
          <div className="aui-slide-list">
            <ul className="aui-slide-item-list">
              <li className="aui-slide-item-item">
                <a href="#" className="v-link">
                  <img className="v-img" src="/img/tou-6.jpg"/>
                </a>
              </li>
              <li className="aui-slide-item-item">
                <a href="#" className="v-link">
                  <img className="v-img" src="/img/tou-5.jpg"/>
                </a>
              </li>
              <li className="aui-slide-item-item">
                <a href="#" className="v-link">
                  <img className="v-img" src="/img/tou-4.jpg"/>
                </a>
              </li>
              <li className="aui-slide-item-item">
                <a href="#" className="v-link">
                  <img className="v-img" src="/img/tou-3.jpg"/>
                </a>
              </li>
              <li className="aui-slide-item-item">
                <a href="#" className="v-link">
                  <img className="v-img" src="/img/tou-2.jpg"/>
                </a>
              </li>
              <li className="aui-slide-item-item">
                <a href="#" className="v-link">
                  <img className="v-img" src="/img/tou-1.jpg"/>
                </a>
              </li>
            </ul>
          </div>
		    </div>
        <div className="aui-title-head">
          <img src="/img/i-i2.png"  alt=""/>
        </div>
        <div className="aui-list-content">
          <div className="aui-list-item">
            <div className="aui-list-item-img">
              <img src="/img/cf-4.jpg" alt=""/>
            </div>
            <div className="aui-slide-box">
              <div className="aui-slide-list">
                <ul className="aui-slide-item-list">
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/pd-zf-6.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">自动滚筒洗衣机 变频 碳晶银 蒸汽杀菌 智能水循环</p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥4999</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥5699</span>
                      </p>
                    </Link>
                  </li>
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/pd-zf-7.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">科克兰 盐焗烘烤开心果 1.36千克</p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥99</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥198</span>
                      </p>
                    </Link>
                  </li>
                  <li className="aui-slide-item-item">
                    <Link to="/List"  className="v-link">
                      <img className="v-img" src="/img/pd-zf-8.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">榙榙 咸鸭蛋黄饼干 80克/袋</p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥12.9</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥49</span>
                      </p>
                    </Link>
                  </li>
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/pd-zf-9.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">唯他可可 椰子水饮料 330毫升/盒 12盒</p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥189</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥299</span>
                      </p>
                    </Link>
                  </li>
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/pd-zf-8.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">巴黎水 含气青柠味饮料 330毫升 24</p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥129</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥199</span>
                      </p>
                    </Link>
                  </li>
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/pd-zf-7.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">calbee 卡乐比 日本进口休闲零食佳可比黄油味薯条 90克/盒</p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥19.9</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥49</span>
                      </p>
                    </Link>
                  </li>
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/pd-zf-6.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">Calbee 卡乐比 日本进口休闲膨化零食 佳可丽色拉味薯条 60克/杯</p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥19</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥49</span>
                      </p>
                    </Link>
                  </li>
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/pd-zf-8.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">Calbee 卡乐比 日本进口休闲膨化零食 佳可丽色拉味薯条 60克/杯</p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥19</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥49</span>
                      </p>
                    </Link>
                  </li>
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/pd-zf-6.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">Calbee 卡乐比 日本进口休闲膨化零食 佳可丽色拉味薯条 60克/杯</p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥19</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥49</span>
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="aui-title-head">
            <img src="/img/i-i3.png"  alt=""/>
          </div>
          <div className="aui-list-item">
            <div className="aui-list-item-img">
              <img src="/img/cf-5.jpg" alt=""/>
            </div>
            <div className="aui-slide-box">
              <div className="aui-slide-list">
                <ul className="aui-slide-item-list">
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/sf-31.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">Whoo 后 秘贴焕然新生精华液护肤礼盒 精华45毫升</p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥349</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥499</span>
                      </p>
                    </Link>
                  </li>
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/sf-32.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">Sulwhasoo 雪花秀 润燥精华60毫升</p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥99</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥198</span>
                      </p>
                    </Link>
                  </li>
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/sf-17.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">雅诗兰黛 红石榴护肤三件套  红色正能</p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥399</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥999</span>
                      </p>
                    </Link>
                  </li>
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/sf-18.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">Whoo 后 拱辰享水 水妍护肤套装 </p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥189</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥299</span>
                      </p>
                    </Link>
                  </li>
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/sf-19.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">惊喜水分套装 持续补水维持平衡</p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥1349</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥4199</span>
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="aui-title-head">
            <img src="/img/i-i4.png"  alt=""/>
          </div>
          <div className="aui-list-item">
            <div className="aui-list-item-img">
              <img src="/img/cf-7.jpg" alt=""/>
            </div>
            <div className="aui-slide-box">
              <div className="aui-slide-list">
                <ul className="aui-slide-item-list">
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/sf-25.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">LA 女士宽松毛衣纯色针织衫外套长袖上衣</p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥249</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥499</span>
                      </p>
                    </Link>
                  </li>
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/sf-26.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">FIRSTMIX秋季新款宽松圆领女式针织开衫</p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥99</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥198</span>
                      </p>
                    </Link>
                  </li>
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/sf-27.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">maxwin 马威 女式八分袖针织连衣裙</p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥122.9</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥149</span>
                      </p>
                    </Link>
                  </li>
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/sf-28.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">唯他可可 椰子水饮料 330毫升/盒 12盒</p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥189</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥299</span>
                      </p>
                    </Link>
                  </li>
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/sf-29.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">巴黎水 含气青柠味饮料 330毫升 24</p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥129</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥199</span>
                      </p>
                    </Link>
                  </li>
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/sf-30.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">calbee 卡乐比 日本进口休闲零食佳可比黄油味薯条 90克/盒</p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥19.9</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥49</span>
                      </p>
                    </Link>
                  </li>
						</ul>
              </div>
            </div>
          </div>
          <div className="aui-title-head">
            <img src="/img/i-i5.png"  alt=""/>
          </div>
          <div className="aui-list-item">
            <div className="aui-list-item-img">
              <img src="/img/cf-8.jpg" alt=""/>
            </div>
            <div className="aui-slide-box">
              <div className="aui-slide-list">
                <ul className="aui-slide-item-list">
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/sf-20.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">nissen 凹凸纵横弹性沙发套</p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥31149</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥11499</span>
                      </p>
                    </Link>
                  </li>
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/sf-21.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">日本NITORI尼达利 三折坐垫 长毛条纹 浅棕 </p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥1199</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥1198</span>
                      </p>
                    </Link>
                  </li>
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/sf-22.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">商城精选 对伴沙发</p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥2399</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥9999</span>
                      </p>
                    </Link>
                  </li>
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/sf-23.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">商城精选 韵白系列沙发三人位</p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥9189</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥21299</span>
                      </p>
                    </Link>
                  </li>
                  <li className="aui-slide-item-item">
                    <Link to="/List" className="v-link">
                      <img className="v-img" src="/img/sf-24.jpg"/>
                      <p className="aui-slide-item-title aui-slide-item-f-els">商城精选 韵白系列沙发单人位</p>
                      <p className="aui-slide-item-info">
                        <span className="aui-slide-item-price">¥2349</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥4199</span>
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="aui-recommend">
          <img src="/img/icon-tj1.jpg" alt=""/>
        </div>
         <section className="aui-list-product">
          <div className="aui-list-product-box">
            {/* 数据渲染 */}
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
      <Footer />
    </React.Fragment>
  )
}
async componentDidMount(){

  let resHome = await axios({url:'/mock/home',params:{_limit:16}});
  this.setState({home:resHome.data.page_data})
  }
}

export default Home;