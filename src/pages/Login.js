// react核心包
import React,{Component} from 'react';

// 路由组件
import {NavLink, Redirect, Link, Route} from 'react-router-dom'

// 样式
import '../assets/css/login.css';
import axios from 'axios';

// 组件类
export default class Login extends React.Component {
    state={
        username:'',
        password:''
    }
    submit = async () => {
        let res = await axios({
          url:'/mock/login',
          params:{
            username:this.state.username,
            password:this.state.password
          }
        })
        if (res.data.error===0){
            //写入local && 跳转user
            localStorage.setItem('rc_user',JSON.stringify(res.data.page_data))
            this.props.history.push('/user')
        } else {
           alert('失败')
        }
    }

    render() {
        return (
            <div id="box" className='Login'>
                <header className="aui-header-default aui-header-fixed ">
                    <a href="javascript:history.go(-1)" className="aui-header-item">
                        <i className="aui-icon aui-icon-back"></i>
                    </a>
                    <div className="aui-header-center aui-header-center-clear">
                    </div>
                    <a href="#" className="aui-header-item-icon" style={{minWidth:0}}>
                        <i className="aui-icon aui-icon-member"></i>
                    </a>
                </header>
                <div className="icon">
                    <img src={require('../assets/head-3.jpg')}/>
                </div>
                用户名：
                <input id="un" type="text"  style={{"marginTop":"260px"}} />
                <span className="s1" style={{"marginTop":"270px","marginLeft":"10px"}}></span>
                <br/>密码：
                <input id='pw' type='password'  style={{"marginTop":"20px"}} />
                <span className="s1" style={{"marginTop":"25px"}}></span>
                <br/>
                <NavLink to="/user"><div id='login' onClick={this.submit}>登录</div></NavLink>
                <br/>
                <NavLink to="/reg"><div id="reg">注册</div></NavLink>
            </div>
        )
    }
    // componentWillUnmount() {
    //     document.querySelector('.header').style.display='block';
    //     document.querySelector('.footer').style.display='block';
    // }

    // async login() {
    //     console.log('登陆中......');
    //     const { userStore } = this.props;
    //     const content = `username=${document.getElementById('un').value}&password=${document.getElementById('pw').value}`;
    //     let userId = null;
    //     await fetch(
    //         `/app/login/`,
    //         {
    //             method: 'post',
    //             headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    //             body: content
    //         }
    //     )
    //         .then(res=>res.json())
    //         .then(data=>{
    //             if (data.code == '0') {
    //                 userStore.logSuc();
    //                 alert('登录成功');
    //                 userStore.getUser(data.userId);
    //                 this.props.history.push('/user');
    //             }else{
    //                 console.log(data.code)
    //                 switch(data.code){
    //                     case 1: alert('用户名密码不正确');
    //                         break;
    //                     case 2: alert('用户名不存在');
    //                         break;
    //                     default: alert('未知错误')
    //                 }
    //             }
    //         }
    //     )
    // }
}