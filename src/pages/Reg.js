
// react核心包
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
// 样式
import '../assets/css/Regs.css'

// 组件类
class Reg extends Component{
    state={
        username:'',
        password:''
    }
    submit = async () => {
        let res = await axios({
            url:'/mock/reg',
            params:{
                username:this.state.username,
                password:this.state.password
            }
        });
        // console.log(1);
        if (res.data.error===0){
            //写入local && 跳转user
            localStorage.setItem('rc_user',JSON.stringify(res.data.page_data))
            this.props.history.push('/user')
        } else {
            alert('失败')
        }
    }
    
    render(){
        return(
            <div id="box"className='Reg'>
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
                    <img src={require('../assets/head-3.jpg')} />
                </div>
                <span className="spa1">用户名：</span>
                <input id='un' type="text"  className="inp1" />
                <span  className="s1"></span>
                <br/>
                <span className="spa2">密码：</span>
                <input id='pw' type="text" className="inp2"/>
                <span v-if="show2" className="s2"></span>
                <br/>
                <span className="spa3">确认密码：</span>
                <input id='pw2' type="text" className="inp3"/>
                <span className="s3"></span>
                <br/>
                <Link to='/login'><div to='/login' id="btn" onClick={()=>{this.submit
                    // document.getElementById('un').value == ''
                    // ? alert('用户名格式不正确')
                    // : document.getElementById('pw').value != '' && document.getElementById('pw').value==document.getElementById('pw2').value
                    //     ? this.register()
                    //     : alert('密码格式非法或两次输入的密码不一致')
                }}>点击注册</div></Link>
            </div>
        )
    }

    // componentWillUnmount() {
    //     document.querySelector('.header').style.display='block';
    //     document.querySelector('.footer').style.display='block';
    // }

    // register() {
    //     const content = `username=${document.getElementById('un').value}&password=${document.getElementById('pw').value}`;
    //     console.log(content)

    //     fetch(
    //         `/app/register/`,
    //         {
    //             method: 'post',
    //             headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    //             body: content,
    //         }
    //     )
    //         .then(res=>res.json())
    //         .then(data=>{
    //             console.log(data)
    //             if (data.code == '0') {
    //                 alert('注册成功')
    //                 this.props.history.push('/login');
    //             }else{
    //                 switch(data.code){
    //                     case 1: alert('用户名重复');
    //                         break;
    //                     default: alert('未知错误');
    //                 }

    //             }
    //         })
    // }
}

export default Reg;