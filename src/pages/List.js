import React,{Component} from "react";
import {Link} from "react-router-dom"


class List extends Component {
  render() {
    return (	
      <>
        	<header className="aui-header-default aui-header-fixed ">
                <a href="javascript:history.back(-1)" className="aui-header-item">
                    <i className="aui-icon aui-icon-back"></i>
                </a>
                <div className="aui-header-center aui-header-center-clear">
                    <div className="aui-header-center-logo">
                        <div id="scrollSearchPro">
                            <span className="current">商品</span>
                            <span>评价</span>
                            <span>详情</span>
                        </div>
                    </div>
                </div>
                <a href="javascript:;" className="aui-header-item-icon select"    style={{minWidth:0}}>
                    <i className="aui-icon aui-icon-share-pd selectVal" onselectstart="return false"></i>
                    <div className="aui-header-drop-down selectList">
                        <div className="aui-header-drop-down-san"></div>
                        <div className="">
                            <p className="" onclick="location='http://www.a-ui.cn/'" >消息</p>
                            <p className="" onclick="location='index.html'">首页</p>
                            <p className="" onclick="location='index.html'">帮助</p>
                            <p className="" onclick="location='index.html'">分享</p>
                        </div>
                    </div>
                </a>
            </header>
            <div className="aui-banner-content aui-fixed-top" data-aui-slider>
                <div className="aui-banner-wrapper">
                    <div className="aui-banner-wrapper-item">
                        <a href="#"><img src="/img/pd-zf-1.jpg"/></a>
                    </div>
                    <div className="aui-banner-wrapper-item">
                        <a href="#">
                            <img src="/img/pd-zf-2.jpg"/>
                        </a>
                    </div>
                    <div className="aui-banner-wrapper-item">
                        <a href="#">
                            <img src="/img/pd-zf-3.jpg"/>
                        </a>
                    </div>
                    <div className="aui-banner-wrapper-item">
                        <a href="#">
                            <img src="/img/pd-zf-4.jpg"/>
                        </a>
                    </div>
                    <div className="aui-banner-wrapper-item">
                        <a href="#"><img src="/img/pd-zf-5.jpg"/></a>
                    </div>
                </div>
		        <div className="aui-banner-pagination"></div>
	        </div>
            <div className="aui-product-content">
                <div className="aui-real-price clearfix">
                    <span>
                        <i>￥</i>10888.00
                    </span>
                    <del><span className="aui-font-num">￥18888</span></del>
                    <div className="aui-settle-choice">
                        <span>促销价</span>
                    </div>
                </div>
                <div className="aui-product-title">
                    <h2>
                        苹果（Apple） Apple iPhone X 移动联通电信全网通4G手机(深空灰)
                    </h2>
                    <p>
                        原封未拆，厂商授权！【服务】顺丰配送，7天无理由退货！
                    </p>
                </div>
                <div className="aui-product-boutique clearfix">
                    <img src="/img/icon-usa.png" />
                    <span className="aui-product-tag-text">美国品牌</span>
                    <img src="/img//icon-sj.png" />
                    <span className="aui-product-tag-text">精选商家</span>
                </div>
                <div className="aui-product-coupon">
                    <a href="#" className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
                        <div className="aui-address-cell-bd">选择</div>
                        <div className="aui-address-cell-ft">颜色分类</div>
                    </a>
			        {/*  弹窗A begin  */}
                    <div className="m-actionsheet" id="actionSheet">
                        <div style={{position:'relative'}}>
                            <div className="aui-spec-menu-top">
                                <div className="aui-spec-first-pic">
                                    <img src="/img/pd-zf-1.jpg" alt=""/>
                                </div>
                                <div className="aui-spec-first-sif">
                                    <h2>￥2299.00 </h2>
                                    <p>重量:0.42kg</p>
                                    <p>商品编号:00986534567</p>
                                </div>
					        </div>
                            <div className="aui-product-text-content">
                                <div className="aui-product-text-content-list">
                                    <div className="aui-product-text-content-list-bd">
                                        <span>已选</span>
                                    </div>
                                    <div className="aui-product-text-content-list-ft">
                                        <span>黑 6GB 64GB 裸机 1件</span>
                                    </div>
                                </div>
                                <div className="aui-product-text-content-list">
                                    <div className="aui-product-text-content-list-bd">
                                        <span>颜色</span>
                                    </div>
                                    <div className="aui-product-text-content-list-ft">
                                        <a href="#" className="aui-selected">黑色</a>
                                        <a href="#">蓝色</a>
                                        <a href="#">白色</a>
                                    </div>
                                </div>
                                <div className="aui-product-text-content-list">
                                    <div className="aui-product-text-content-list-bd">
                                        <span>版本</span>
                                    </div>
                                    <div className="aui-product-text-content-list-ft">
                                        <a href="#" className="aui-selected">全网通64G</a>
                                        <a href="#">全网通128G</a>
                                        <a href="#">全网通256G</a>
                                    </div>
                                </div>
                                <div className="aui-product-text-content-list">
                                    <div className="aui-product-text-content-list-bd">
                                        <span>数量</span>
                                    </div>
                                    <div className="aui-car-box-list-text-price">
                                        <div className="aui-car-box-list-text-arithmetic" style={{position:'inherit'}}>
                                            <a href="javascript:;" className="minus">-</a>
                                            <span className="num">1</span>
                                            <a href="javascript:;" className="plus">+</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="aui-product-text-content-list">
                                    <div className="aui-product-text-content-list-bd">
                                        <span>延保</span>
                                    </div>
                                    <div className="aui-product-text-content-list-ft">
                                        <a href="#" className="aui-selected">屏碎保1年¥249.00</a>
                                        <a href="#">屏碎保2年¥329.00</a>
                                        <a href="#">全保修2年¥449.00</a>
                                    </div>
                                </div>
                                <div className="aui-product-text-content-list">
                                    <div className="aui-product-text-content-list-bd">
                                        <span>意外</span>
                                    </div>
                                    <div className="aui-product-text-content-list-ft">
                                        <a href="#" className="aui-selected">换新保2年¥449.00</a>
                                        <a href="#">电池换2年¥39.00</a>
                                        <a href="#">延长保2年¥279.00</a>
                                    </div>
                                </div>
					        </div>
                            <a href="javascript:;" className="actionsheet-action" id="cancel"></a>
                            {/* <div className="aui-product-function">
                                <a href="car.html" className="yellow-color">加入购物车</a>
                                <a href="order.html" className="red-color">立即购买</a>
                            </div> */}
				        </div>
			        </div>
                    <div className="m-actionsheet" id="J_ActionSheet">
                        <div className="aui-coupon-codes">
                            <h2>店铺优惠券</h2>
                            <div className="aui-coupon-codes-item">
                                <img src="/img/icon-coupon1.jpg" alt=""/>
                            </div>
                            <div className="aui-coupon-codes-item">
                                <img src="/img/icon-coupon1.jpg" alt=""/>
                            </div>
                            <div className="aui-coupon-codes-item">
                                <img src="/img/icon-coupon1.jpg" alt=""/>
                            </div>
                        </div>
                        <a href="javascript:;" className="actionsheet-action" id="J_Cancel"></a>
                    </div>
			        {/*  弹窗A end */}
                    <a href="#" className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" id="J_ShowActionSheet">
                        <div className="aui-address-cell-bd">领券</div>
                        <div className="aui-address-cell-ft">
                            <span>满159减10券</span>
                            <span>满299减30券</span>
                        </div>
                    </a>
                    <a href="#" className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
                        <div className="aui-address-cell-bd">配送</div>
                        <div className="aui-address-cell-ft">
                            <input className="aui-Address-box-input" 
                            type="text" 
                            id="J_Address"  readonly="readonly"  
                            placeholder="所在地区" 
                            style={{height:'auto', borderBottom:'none',paddingLeft:0,marginBottom:0}} 
                            />
                        </div>
                    </a>
                    <a href="#" className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
                        <div className="aui-address-cell-bd">运费</div>
                        <div className="aui-address-cell-ft">免运费</div>
                    </a>
					<a href="#" className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
						<div className="aui-address-cell-bd">说明</div>
						<div className="aui-address-cell-ft">假一赔十 7天无忧退货</div>
					</a>
				</div>
				<div className="aui-dri"></div>
				<div className="aui-product-evaluate">
					<a href="#" className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
						<div className="aui-address-cell-bd">商品评价   <em>(3290)</em></div>
						<div className="aui-address-cell-ft">
							<span>好评 100%</span>
						</div>
					</a>
				</div>
				<div className="aui-dri"></div>
				<div className="aui-product-evaluate">
					<a href="#" className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
						<div className="aui-address-cell-bd">
							<div className="clearfix">
								<div className="aui-product-shop-img">
									<img src="/img/user10.png" alt=""/>
								</div>
								<div className="aui-product-shop-text">
									<h3>Versace官方旗舰店</h3>
									<p>精选商家  服务保障</p>
									<p>在售商品2390件</p>
								</div>
							</div>
						</div>
						<div className="aui-address-cell-ft">
							<span>进店看看</span>
						</div>
					</a>
				</div>
				<div className="aui-dri"></div>
				<div className="aui-slide-box">
					<div className="aui-slide-list">
						<ul className="aui-slide-item-list">
							<li className="aui-slide-item-item">
								<a href="#" className="v-link">
									<img className="v-img" src="/img/sf-1.jpg"/>
									<p className="aui-slide-item-title aui-slide-item-f-els">NIKE耐克男女鞋 ROSHE ONE 男女情侣小黑鞋奥利奥轻便休闲鞋</p>
									<p className="aui-slide-item-info">
										<span className="aui-slide-item-price">¥349</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥499</span>
									</p>
								</a>
							</li>
							<li className="aui-slide-item-item">
								<a href="#" className="v-link">
									<img className="v-img" src="/img/sf-2.jpg"/>
									<p className="aui-slide-item-title aui-slide-item-f-els">【防晒神器】let's diet 防晒帽 SPF50PA++ </p>
									<p className="aui-slide-item-info">
										<span className="aui-slide-item-price">¥99</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥198</span>
									</p>
								</a>
							</li>
							<li className="aui-slide-item-item">
								<a href="#" className="v-link">
									<img className="v-img" src="/img/sf-3.jpg"/>
									<p className="aui-slide-item-title aui-slide-item-f-els">秋冬新款 女士优雅宽松麂皮绒彷皮毛一体中长款仿皮</p>
									<p className="aui-slide-item-info">
										<span className="aui-slide-item-price">¥399</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥999</span>
									</p>
								</a>
							</li>
							<li className="aui-slide-item-item">
								<a href="#" className="v-link">
									<img className="v-img" src="/img/sf-4.jpg"/>
									<p className="aui-slide-item-title aui-slide-item-f-els">adidas 阿迪达斯 运动型格 女子短袖T恤 CF3657  CF3658</p>
									<p className="aui-slide-item-info">
										<span className="aui-slide-item-price">¥189</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥299</span>
									</p>
								</a>
							</li>
							<li className="aui-slide-item-item">
								<a href="#" className="v-link">
									<img className="v-img" src="/img/sf-5.jpg"/>
									<p className="aui-slide-item-title aui-slide-item-f-els">独立日限定 pop-up 短袖T恤 T-2</p>
									<p className="aui-slide-item-info">
										<span className="aui-slide-item-price">¥1349</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥4199</span>
									</p>
								</a>
							</li>
							<li className="aui-slide-item-item">
								<a href="#" className="v-link">
									<img className="v-img" src="/img/sf-6.jpg"/>
									<p className="aui-slide-item-title aui-slide-item-f-els">秋冬纯棉床单套件</p>
									<p className="aui-slide-item-info">
										<span className="aui-slide-item-price">¥349</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥499</span>
									</p>
								</a>
							</li>
							<li className="aui-slide-item-item">
								<a href="#" className="v-link">
									<img className="v-img" src="/img/sf-7.jpg"/>
									<p className="aui-slide-item-title aui-slide-item-f-els">法国品牌尚玛可 W-梵诺克·二合一七孔纤维冬被</p>
									<p className="aui-slide-item-info">
										<span className="aui-slide-item-price">¥349</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥499</span>
									</p>
								</a>
							</li>
						</ul>
					</div>

				</div>
				<div className="aui-dri"></div>
				<div className="aui-product-pages">
					<div className="aui-product-pages-title">
						<h2>图文详情</h2>
					</div>
					<div className="aui-product-pages-img">
						<img src="/img/pd-cp0.jpg" />
						<img src="/img/pd-cp2.jpg" />
						<img src="/img/pd-cp3.jpg" />
						<img src="/img/pd-cp1.jpg" />
						<img src="/img/pd-cp.jpg" />
						<img src="/img/pd-cp4.jpg" />
					</div>
				</div>
				<div className="aui-recommend">
					<img src="/img/icon-tj3.jpg" />
					{/* <h2>为你推荐</h2> */}
				</div>
				<section className="aui-list-product">
					<div className="aui-list-product-box">
						<a href="javascript:;" className="aui-list-product-item">
							<div className="aui-list-product-item-img">
								<img src="/img/sf-15.jpg" />
							</div>
							<div className="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div className="aui-list-product-mes-box">
									<div>
									<span className="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span className="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div className="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="javascript:;" className="aui-list-product-item">
							<div className="aui-list-product-item-img">
								<img src="/img/sf-14.jpg" />
							</div>
							<div className="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div className="aui-list-product-mes-box">
									<div>
									<span className="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span className="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div className="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="javascript:;" className="aui-list-product-item">
							<div className="aui-list-product-item-img">
								<img src="/img/sf-13.jpg" />
							</div>
							<div className="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div className="aui-list-product-mes-box">
									<div>
									<span className="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span className="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div className="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="javascript:;" className="aui-list-product-item">
							<div className="aui-list-product-item-img">
								<img src="/img/sf-12.jpg" />
							</div>
							<div className="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div className="aui-list-product-mes-box">
									<div>
									<span className="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span className="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div className="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="javascript:;" className="aui-list-product-item">
							<div className="aui-list-product-item-img">
								<img src="/img/sf-11.jpg" />
							</div>
							<div className="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div className="aui-list-product-mes-box">
									<div>
									<span className="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span className="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div className="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="javascript:;" className="aui-list-product-item">
							<div className="aui-list-product-item-img">
								<img src="/img/sf-10.jpg" />
							</div>
							<div className="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div className="aui-list-product-mes-box">
									<div>
									<span className="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span className="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div className="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="javascript:;" className="aui-list-product-item">
							<div className="aui-list-product-item-img">
								<img src="/img/sf-9.jpg" />
							</div>
							<div className="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div className="aui-list-product-mes-box">
									<div>
									<span className="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span className="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div className="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="javascript:;" className="aui-list-product-item">
							<div className="aui-list-product-item-img">
								<img src="/img/sf-8.jpg" />
							</div>
							<div className="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div className="aui-list-product-mes-box">
									<div>
									<span className="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span className="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div className="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="javascript:;" className="aui-list-product-item">
							<div className="aui-list-product-item-img">
								<img src="/img/sf-16.jpg" />
							</div>
							<div className="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div className="aui-list-product-mes-box">
									<div>
									<span className="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span className="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div className="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="javascript:;" className="aui-list-product-item">
							<div className="aui-list-product-item-img">
								<img src="/img/sf-17.jpg" />
							</div>
							<div className="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div className="aui-list-product-mes-box">
									<div>
									<span className="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span className="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div className="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="javascript:;" className="aui-list-product-item">
							<div className="aui-list-product-item-img">
								<img src="/img/sf-18.jpg" />
							</div>
							<div className="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div className="aui-list-product-mes-box">
									<div>
									<span className="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span className="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div className="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="javascript:;" className="aui-list-product-item">
							<div className="aui-list-product-item-img">
								<img src="/img/sf-19.jpg"/>
							</div>
							<div className="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div className="aui-list-product-mes-box">
									<div>
									<span className="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span className="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div className="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="javascript:;" className="aui-list-product-item">
							<div className="aui-list-product-item-img">
								<img src="/img/sf-20.jpg" />
							</div>
							<div className="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div className="aui-list-product-mes-box">
									<div>
									<span className="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span className="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div className="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="javascript:;" className="aui-list-product-item">
							<div className="aui-list-product-item-img">
								<img src="/img/sf-21.jpg" />
							</div>
							<div className="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div className="aui-list-product-mes-box">
									<div>
									<span className="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span className="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div className="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="javascript:;" className="aui-list-product-item">
							<div className="aui-list-product-item-img">
								<img src="/img/sf-22.jpg" />
							</div>
							<div className="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div className="aui-list-product-mes-box">
									<div>
									<span className="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span className="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div className="aui-comment">986评论</div>
								</div>
							</div>
						</a>
						<a href="javascript:;" className="aui-list-product-item">
							<div className="aui-list-product-item-img">
								<img src="/img/sf-23.jpg" />
							</div>
							<div className="aui-list-product-item-text">
								<h3>KOBE LETTUCE 秋冬新款 女士日系甜美纯色半高领宽松套头毛衣针织衫</h3>
								<div className="aui-list-product-mes-box">
									<div>
									<span className="aui-list-product-item-price">
										<em>¥</em>
										399.99
									</span>
										<span className="aui-list-product-item-del-price">
										¥495.65
									</span>
									</div>
									<div className="aui-comment">986评论</div>
								</div>
							</div>
						</a>
					</div>
				</section>
			</div>
			<footer className="aui-footer-product">
				<div className="aui-footer-product-fixed">
					<div className="aui-footer-product-concern-cart">
						<a href="#">
							<span className="aui-f-p-icon"><img src="/img/icon-kf.png" /></span>
							<span className="aui-f-p-focus-info">客服</span>
						</a>
						<a href="#">
							<span className="aui-f-p-icon"><img src="/img/icon-sc.png" /></span>
							<span className="aui-f-p-focus-info">收藏</span>
						</a>
						<a href="#">
							<span className="aui-f-p-icon"><img src="/img/icon-dp.png" /></span>
							<span className="aui-f-p-focus-info">店铺</span>
						</a>
					</div>
					<div className="aui-footer-product-action-list">
						{/* <a href="car.html" className="yellow-color">加入购物车</a>
						<a href="order.html" className="red-color">立即购买</a> */}
						<Link to='/BuyCar' className="yellow-color">加入购物车</Link>
						<Link to='/BuyCar' className="red-color">立即购买</Link>
					</div>
				</div>
			</footer>
      </>
    );
  }
}

export default List;