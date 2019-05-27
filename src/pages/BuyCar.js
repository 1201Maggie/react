import React,{Component} from "react";
import {Link} from "react-router-dom"
import $ from 'jquery';

import '../assets/css/buyCar.css'

class BuyCar extends Component {
  render() {
    return (
<>
<header className="aui-header-default aui-header-fixed ">
    <a href="javascript:history.back(-1)" className="aui-header-item">
        <i className="aui-icon aui-icon-back"></i>
    </a>
    <div className="aui-header-center aui-header-center-clear">
        <div className="aui-header-center-logo">
            <div className="">购物车(6)</div>
        </div>
    </div>
    <a href="#" className="aui-header-item-icon"   style={{minWidth:0}}>
        <i className="aui-icon aui-icon-member"></i>
    </a>
</header>
<section className="aui-car-content">
    <div className="aui-dri"></div>
    <div className="aui-car-box">
        <div className="aui-car-box-name">
            <input type="checkbox" className="check goods-check shopCheck" />
            <h3>
                <a href="#">艾畅旗舰店</a>
            </h3>
            <div className="aui-car-coupons">
                <a href="#">领券</a>
                <a href="#">编辑</a>
            </div>
        </div>
        <div className="aui-car-box-list">
            <ul>
                <li>
                    <div className="aui-car-box-list-item">
                        <input type="checkbox" className="check goods-check goodsCheck"/>
                        <div className="aui-car-box-list-img">
                            <Link to='/List'>
                                <img src="/img/sf-11.jpg" alt=""/>
                            </Link>
                        </div>
                        <div className="aui-car-box-list-text">
                            <h4>
                                <Link to='/List'>【黑卡96折】Apple 苹果 iPhone 7（A1660）移动联通电信4G手机 国内行货</Link>
                            </h4>
                            <div className="aui-car-box-list-text-brief">
                                <span>重量:3.3kg</span>
                                <span>颜色:标配版</span>
                                <span>版本:5.7英寸</span>
                            </div>
                            <div className="aui-car-box-list-text-price">
                                <div className="aui-car-box-list-text-pri">
                                    ￥<b className="price">100.00</b>
                                </div>
                                <div className="aui-car-box-list-text-arithmetic">
                                    <a href="javascript:;" className="minus">-</a>
                                    <span className="num">1</span>
                                    <a href="javascript:;" className="plus">+</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aui-dri"></div>
                </li>
                <li>
                    <div className="aui-car-box-list-item">
                        <input type="checkbox" className="check goods-check goodsCheck"/>
                        <div className="aui-car-box-list-img">
                            <Link to='/List'>
                                <img src="/img/sf-12.jpg" alt=""/>
                            </Link>
                        </div>
                        <div className="aui-car-box-list-text">
                            <h4>
                                <Link to='/List'>【黑卡96折】Apple 苹果 iPhone 7（A1660）移动联通电信4G手机 国内行货</Link>
                            </h4>
                            <div className="aui-car-box-list-text-brief">
                                <span>重量:3.3kg</span>
                                <span>颜色:标配版</span>
                                <span>版本:5.7英寸</span>
                            </div>
                            <div className="aui-car-box-list-text-price">
                                <div className="aui-car-box-list-text-pri">
                                    ￥<b className="aui-price">100.00</b>
                                </div>
                                <div className="aui-car-box-list-text-arithmetic">
                                    <a href="javascript:;" className="minus">-</a>
                                    <span className="num">1</span>
                                    <a href="javascript:;" className="plus">+</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aui-dri"></div>
                </li>
            </ul>
        </div>
        <div className="aui-car-box-name">
            <input type="checkbox" className="check goods-check shopCheck"/>
            <h3><a href="#">伊利纯生旗舰店</a></h3>
            <div className="aui-car-coupons">
                <a href="#">领券</a>
                <a href="#">编辑</a>
            </div>
        </div>
        <div className="aui-car-box-list">
            <ul>
                <li>
                    <div className="aui-car-box-list-item">
                        <input type="checkbox" className="check goods-check goodsCheck"/>
                        <div className="aui-car-box-list-img">
                            <Link to='/List'>
                                <img src="/img/sf-11.jpg" alt=""/>
                            </Link>
                        </div>
                        <div className="aui-car-box-list-text">
                            <h4>
                                <Link to='/List'>【黑卡96折】Apple 苹果 iPhone 7（A1660）移动联通电信4G手机 国内行货</Link>
                            </h4>
                            <div className="aui-car-box-list-text-brief">
                                <span>重量:3.3kg</span>
                                <span>颜色:标配版</span>
                                <span>版本:5.7英寸</span>
                            </div>
                            <div className="aui-car-box-list-text-price">
                                <div className="aui-car-box-list-text-pri">
                                    ￥<b className="price">100.00</b>
                                </div>
                                <div className="aui-car-box-list-text-arithmetic">
                                    <a href="javascript:;" className="minus">-</a>
                                    <span className="num">1</span>
                                    <a href="javascript:;" className="plus">+</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aui-dri"></div>
                </li>
                <li>
                    <div className="aui-car-box-list-item">
                        <input type="checkbox" className="check goods-check goodsCheck"/>
                        <div className="aui-car-box-list-img">
                            <Link to='/List'>
                                <img src="/img/sf-12.jpg" alt=""/>
                            </Link>
                        </div>
                        <div className="aui-car-box-list-text">
                            <h4>
                                <Link to='/List'>【黑卡96折】Apple 苹果 iPhone 7（A1660）移动联通电信4G手机 国内行货</Link>
                            </h4>
                            <div className="aui-car-box-list-text-brief">
                                <span>重量:3.3kg</span>
                                <span>颜色:标配版</span>
                                <span>版本:5.7英寸</span>
                            </div>
                            <div className="aui-car-box-list-text-price">
                                <div className="aui-car-box-list-text-pri">
                                    ￥<b className="aui-price">100.00</b>
                                </div>
                                <div className="aui-car-box-list-text-arithmetic">
                                    <a href="javascript:;" className="minus">-</a>
                                    <span className="num">1</span>
                                    <a href="javascript:;" className="plus">+</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aui-dri"></div>
                </li>
                <li>
                    <div className="aui-car-box-list-item">
                        <input type="checkbox" className="check goods-check goodsCheck"/>
                        <div className="aui-car-box-list-img">
                            <Link to='/List'>
                                <img src="/img/sf-13.jpg" alt=""/>
                            </Link>
                        </div>
                        <div className="aui-car-box-list-text">
                            <h4>
                                <Link to='/List'>【黑卡96折】Apple 苹果 iPhone 7（A1660）移动联通电信4G手机 国内行货</Link>
                            </h4>
                            <div className="aui-car-box-list-text-brief">
                                <span>重量:3.3kg</span>
                                <span>颜色:标配版</span>
                                <span>版本:5.7英寸</span>
                            </div>
                            <div className="aui-car-box-list-text-price">
                                <div className="aui-car-box-list-text-pri">
                                    ￥<b className="price">100.00</b>
                                </div>
                                <div className="aui-car-box-list-text-arithmetic">
                                    <a href="javascript:;" className="minus">-</a>
                                    <span className="num">1</span>
                                    <a href="javascript:;" className="plus">+</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aui-dri"></div>
                </li>
                <li>
                    <div className="aui-car-box-list-item">
                        <input type="checkbox" className="check goods-check goodsCheck"/>
                        <div className="aui-car-box-list-img">
                            <Link to='/List'>
                                <img src="/img/sf-14.jpg" alt=""/>
                            </Link>
                        </div>
                        <div className="aui-car-box-list-text">
                            <h4>
                                <Link to='/List'>【黑卡96折】Apple 苹果 iPhone 7（A1660）移动联通电信4G手机 国内行货</Link>
                            </h4>
                            <div className="aui-car-box-list-text-brief">
                                <span>重量:3.3kg</span>
                                <span>颜色:标配版</span>
                                <span>版本:5.7英寸</span>
                            </div>
                            <div className="aui-car-box-list-text-price">
                                <div className="aui-car-box-list-text-pri">
                                    ￥<b className="aui-price">100.00</b>
                                </div>
                                <div className="aui-car-box-list-text-arithmetic">
                                    <a href="javascript:;" className="minus">-</a>
                                    <span className="num">1</span>
                                    <a href="javascript:;" className="plus">+</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aui-dri"></div>
                </li>
                <li>
                    <div className="aui-car-box-list-item">
                        <input type="checkbox" className="check goods-check goodsCheck"/>
                        <div className="aui-car-box-list-img">
                            <Link to='/List'>
                                <img src="/img/sf-15.jpg" alt=""/>
                            </Link>
                        </div>
                        <div className="aui-car-box-list-text">
                            <h4>
                                <Link to='/List'>【黑卡96折】Apple 苹果 iPhone 7（A1660）移动联通电信4G手机 国内行货</Link>
                            </h4>
                            <div className="aui-car-box-list-text-brief">
                                <span>重量:3.3kg</span>
                                <span>颜色:标配版</span>
                                <span>版本:5.7英寸</span>
                            </div>
                            <div className="aui-car-box-list-text-price">
                                <div className="aui-car-box-list-text-pri">
                                    ￥<b className="price">100.00</b>
                                </div>
                                <div className="aui-car-box-list-text-arithmetic">
                                    <a href="javascript:;" className="minus">-</a>
                                    <span className="num">1</span>
                                    <a href="javascript:;" className="plus">+</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aui-dri"></div>
                </li>
                <li>
                    <div className="aui-car-box-list-item">
                        <input type="checkbox" className="check goods-check goodsCheck"/>
                        <div className="aui-car-box-list-img">
                            <Link to='/List'>
                                <img src="/img/sf-16.jpg" alt=""/>
                            </Link>
                        </div>
                        <div className="aui-car-box-list-text">
                            <h4>
                                <Link to='/List'>【黑卡96折】Apple 苹果 iPhone 7（A1660）移动联通电信4G手机 国内行货</Link>
                            </h4>
                            <div className="aui-car-box-list-text-brief">
                                <span>重量:3.3kg</span>
                                <span>颜色:标配版</span>
                                <span>版本:5.7英寸</span>
                            </div>
                            <div className="aui-car-box-list-text-price">
                                <div className="aui-car-box-list-text-pri">
                                    ￥<b className="aui-price">100.00</b>
                                </div>
                                <div className="aui-car-box-list-text-arithmetic">
                                    <a href="javascript:;" className="minus">-</a>
                                    <span className="num">1</span>
                                    <a href="javascript:;" className="plus">+</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aui-dri"></div>
                </li>
            </ul>
        </div>
        <div className="aui-shopPrice">
            本店总计：￥
            <span className="aui-total-amount ShopTotal">3990.00</span>
        </div>
    </div>
</section>
<div className="aui-payment-bar">
    <div className="all-checkbox"><input type="checkbox" className="check goods-check" id="AllCheck"/>全选</div>
    <div className="shop-total">
        <strong>合计：<i className="total" id="AllTotal">399.00</i></strong>
    </div>
    <a href="#" className="settlement">去结算</a>
</div>
</>
    )
  }
  componentDidUpdate(){
    $(function(){
        // 数量减
        $(".minus").click(function() {
            var t = $(this).parent().find('.num');
            t.text(parseInt(t.text()) - 1);
            if (t.text() <= 1) {
                t.text(1);
            }
            TotalPrice();
        });
        // 数量加
        $(".plus").click(function() {
            var t = $(this).parent().find('.num');
            t.text(parseInt(t.text()) + 1);
            if (t.text() <= 1) {
                t.text(1);
            }
            TotalPrice();
        });
        /******------------分割线-----------------******/
          // 点击商品按钮
      $(".goodsCheck").click(function() {
        var goods = $(this).closest(".aui-car-box").find(".goodsCheck"); //获取本店铺的所有商品
        var goodsC = $(this).closest(".aui-car-box").find(".goodsCheck:checked"); //获取本店铺所有被选中的商品
        var Shops = $(this).closest(".aui-car-box").find(".shopCheck"); //获取本店铺的全选按钮
        if (goods.length == goodsC.length) { //如果选中的商品等于所有商品
          Shops.prop('checked', true); //店铺全选按钮被选中
          if ($(".shopCheck").length == $(".shopCheck:checked").length) { //如果店铺被选中的数量等于所有店铺的数量
            $("#AllCheck").prop('checked', true); //全选按钮被选中
            TotalPrice();
          } else {
            $("#AllCheck").prop('checked', true); //else全选按钮不被选中
            TotalPrice();
          }
        } else { //如果选中的商品不等于所有商品
          Shops.prop('checked', true); //店铺全选按钮不被选中
          $("#AllCheck").prop('checked', true); //全选按钮也不被选中
          // 计算
          TotalPrice();
          // 计算
        }
      });
      // 点击店铺按钮
      $(".shopCheck").click(function() {
        if ($(this).prop("checked") == true) { //如果店铺按钮被选中
          $(this).parents(".aui-car-box").find(".goods-check").prop('checked', true); //店铺内的所有商品按钮也被选中
          if ($(".shopCheck").length == $(".shopCheck:checked").length) { //如果店铺被选中的数量等于所有店铺的数量
            $("#AllCheck").prop('checked', true); //全选按钮被选中
            TotalPrice();
          } else {
            $("#AllCheck").prop('checked', true); //else全选按钮不被选中
            TotalPrice();
          }
        } else { //如果店铺按钮不被选中
          $(this).parents(".aui-car-box").find(".goods-check").prop('checked', false); //店铺内的所有商品也不被全选
          $("#AllCheck").prop('checked', false); //全选按钮也不被选中
          TotalPrice();
        }
      });
      // 点击全选按钮
      $("#AllCheck").click(function() {
        if ($(this).prop("checked") == true) { //如果全选按钮被选中
          $(".goods-check").prop('checked', true); //所有按钮都被选中
          TotalPrice();
        } else {
          $(".goods-check").prop('checked', false); //else所有按钮不全选
          TotalPrice();
        }
        $(".shopCheck").change(); //执行店铺全选的操作
      });
        //计算
      function TotalPrice() {
        var allprice = 0; //总价
        $(".aui-car-box").each(function() { //循环每个店铺
          var oprice = 0; //店铺总价
          $(this).find(".goodsCheck").each(function() { //循环店铺里面的商品
            if ($(this).is(":checked")) { //如果该商品被选中
                var num = parseInt($(this).parents(".shop-info").find(".num").text()); //得到商品的数量
                var price = parseFloat($(this).parents(".shop-info").find(".price").text()); //得到商品的单价
                var total = price * num; //计算单个商品的总价
              oprice += total; //计算该店铺的总价
            }
            $(this).closest(".aui-car-box").find(".ShopTotal").text(oprice.toFixed(2)); //显示被选中商品的店铺总价
          });
          var oneprice = parseFloat($(this).find(".ShopTotal").text()); //得到每个店铺的总价
          allprice += oneprice; //计算所有店铺的总价
        });
        $("#AllTotal").text(allprice.toFixed(2)); //输出全部总价
      }
    });
    
}
}

export default BuyCar;