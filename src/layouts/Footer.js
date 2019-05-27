import React,{Component} from "react";
import {NavLink,withRouter} from "react-router-dom";
import '../assets/css/footer.css'
// import {withRouter} from 'react-router-dom'


class Footer extends Component {
	// state={
  //   hidden:false,//是否隐藏
  //   selectedTab:'home',//是否选中，就是一开始是否有颜色
  // };

  //   //编程式跳转
  //   this.props.history.push(this.state.tabs[index].path)

  // };

  // // 单页面滚动问题，不会被别的页面影响，路由监听
  componentWillReceiveProps(nextProps) {
    this.routerWatch(nextProps.location.pathname)
  }

  // // 换页面之后保持之前的位置，路由监听
  componentDidMount() {
    this.routerWatch(this.props.location.pathname)
  }

  routerWatch(path) {//footer内部对props观测，取出变化的path对比tabs数据后修改selectedTab
  };
  render() {
    return (
    <footer className="aui-footer-default aui-footer-fixed">
		<NavLink to="/Home" className="aui-footer-item aui-footer-active">
			<span className="aui-footer-item-icon aui-icon aui-footer-icon-home"></span>
			<span className="aui-footer-item-text">首页</span>
		</NavLink>
		<NavLink to="/classify" className="aui-footer-item">
			<span className="aui-footer-item-icon aui-icon aui-footer-icon-class"></span>
			<span className="aui-footer-item-text">分类</span>
		</NavLink>
		<NavLink to="/Discover" className="aui-footer-item">
			<span className="aui-footer-item-icon aui-icon aui-footer-icon-find"></span>
			<span className="aui-footer-item-text">发现</span>
		</NavLink>
		<NavLink to="/BuyCar" className="aui-footer-item">
			<span className="aui-footer-item-icon aui-icon aui-footer-icon-car"></span>
			<span className="aui-footer-item-text">购物车</span>
		</NavLink>
		<NavLink to="/User" className="aui-footer-item">
			<span className="aui-footer-item-icon aui-icon aui-footer-icon-me"></span>
			<span className="aui-footer-item-text">我的</span>
		</NavLink>
	</footer>
		);
  }
}

export default withRouter(Footer);