import React,{Component} from "react";
import Footer from "../layouts/Footer";
import {Link} from "react-router-dom"
import axios from 'axios';


class User extends Component {
    state={
        home:[],
        data: ['1', '2', '3'],
      };
  render() {
    return (
      <React.Fragment>
        <header className="aui-header-default aui-header-fixed aui-header-clear-bg " style={{background:"none", borderBottom:0}}>
            <a href="#" className="aui-header-item">
                <i className="aui-icon aui-icon-back-white" id="scrollSearchI" style={{"display":"block"}}></i>
                <div id="scrollSearchDiv">
                    <img src="/img/head-2.jpg" alt=""/>
                </div>
            </a>
            <div className="aui-header-center aui-header-center-clear">
                <div className="">
                </div>
            </div>
            <a href="my-set.html" className="aui-header-item-icon">
                <i className="aui-icon aui-icon-Sets"></i>
            </a>
        </header>
        <section className="aui-me-content" style={{paddingTop:0}}>
            <div className="aui-me-content-box">
                <div className="aui-me-content-list">
                    <div className="aui-me-content-item">
                        <div className="aui-me-content-item-head">
                            <div className="aui-me-content-item-img">
                                <img src="/img/head-2.jpg" alt=""/>
                            </div>
                            <div className="aui-me-content-item-title">xxx</div>
                        </div>
                        <div className="aui-me-content-item-text">
                            <a href="my-orders.html">
                                <span>98</span>
                                <span>收藏</span>
                            </a>
                            <a href="my-orders.html">
                                <span>78</span>
                                <span>关注</span>
                            </a>
                            <a href="my-orders.html">
                                <span>99</span>
                                <span>足迹</span>
                            </a>
                            <a href="my-orders.html">
                                <span>65</span>
                                <span>分享</span>
                            </a>
                        </div>
                    </div>
                    <div className="aui-me-content-card">
                        <h3><i className="aui-icon aui-card-me"></i>plus会员</h3>
                        <a href="my-membership.html">开通享8大权益</a>
                    </div>
                </div>
            </div>
            <div className="aui-me-content-order">
                <a href="my-order.html" className="aui-well aui-fl-arrow">
                    <div className="aui-well-bd">我的订单</div>
                    <div className="aui-well-ft">查看全部</div>
                </a>
            </div>
            <section className="aui-grid-content">
                <div className="aui-grid-row">
                    <a href="my-order.html" className="aui-grid-row-item">
                        <i className="aui-icon-large aui-icon-large-sm aui-icon-wallet"></i>
                        <p className="aui-grid-row-label">待付款</p>
                    </a>
                    <a href="my-order.html" className="aui-grid-row-item">
                        <i className="aui-icon-large aui-icon-large-sm aui-icon-goods"></i>
                        <p className="aui-grid-row-label">待发货</p>
                    </a>
                    <a href="my-order.html" className="aui-grid-row-item">
                        <i className="aui-icon-large aui-icon-large-sm aui-icon-receipt"></i>
                        <p className="aui-grid-row-label">待收货</p>
                    </a>
                    <a href="my-order.html" className="aui-grid-row-item">
                        <i className="aui-icon-large aui-icon-large-sm aui-icon-evaluate"></i>
                        <p className="aui-grid-row-label">待评价</p>
                    </a>
                    <a href="my-order.html" className="aui-grid-row-item">
                        <i className="aui-icon-large aui-icon-large-sm aui-icon-refund"></i>
                        <p className="aui-grid-row-label">退货退款</p>
                    </a>
                </div>
                <div className="aui-dri"></div>
                <div className="aui-grid-row">
                    <a href="my-invitation.html" className="aui-grid-row-item">
                        <i className="aui-icon-large aui-icon-large-sm aui-icon-invitation"></i>
                        <p className="aui-grid-row-label">邀请好友</p>
                    </a>
                    <a href="my-sign.html" className="aui-grid-row-item">
                        <i className="aui-icon-large aui-icon-large-sm aui-icon-signs"></i>
                        <p className="aui-grid-row-label">签到领币</p>
                    </a>
                    <a href="my-coupon.html" className="aui-grid-row-item">
                        <i className="aui-icon-large aui-icon-large-sm aui-icon-coupon"></i>
                        <p className="aui-grid-row-label">优惠券</p>
                    </a>
                    <a href="my-purchase.html" className="aui-grid-row-item">
                        <i className="aui-icon-large aui-icon-large-sm aui-icon-fight"></i>
                        <p className="aui-grid-row-label">我的拼团</p>
                    </a>
                    <a href="#" className="aui-grid-row-item">
                        <i className="aui-icon-large aui-icon-large-sm aui-icon-recommend"></i>
                        <p className="aui-grid-row-label">商品推手</p>
                    </a>
                    <a href="#" className="aui-grid-row-item">
                        <i className="aui-icon-large aui-icon-large-sm aui-icon-recharge"></i>
                        <p className="aui-grid-row-label">充值中心</p>
                    </a>
                    <a href="#" className="aui-grid-row-item">
                        <i className="aui-icon-large aui-icon-large-sm aui-icon-help"></i>
                        <p className="aui-grid-row-label">帮助中心</p>
                    </a>
                    <a href="#" className="aui-grid-row-item">
                        <i className="aui-icon-large aui-icon-large-sm aui-icon-problem"></i>
                        <p className="aui-grid-row-label">我的问答</p>
                    </a>
                    <a href="#" className="aui-grid-row-item">
                        <i className="aui-icon-large aui-icon-large-sm aui-icon-evaluates"></i>
                        <p className="aui-grid-row-label">我的评价</p>
                    </a>
                    <a href="#" className="aui-grid-row-item">
                        <i className="aui-icon-large aui-icon-large-sm aui-icon-shares"></i>
                        <p className="aui-grid-row-label">我的分享</p>
                    </a>
                </div>
                <div className="aui-recommend">
                    <img src="/img/icon-tj3.jpg" alt=""/>
                </div>
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
            </section>
        </section>
        <Footer/>
      </React.Fragment>
    );
  }
  async componentDidMount(){

    let resHome = await axios({url:'/mock/home',params:{_limit:16}});
    this.setState({home:resHome.data.page_data})
    }
  
}

export default User;