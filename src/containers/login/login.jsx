import React, {Component} from 'react'

import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  Button
  } from 'antd-mobile' 
import Logo from '../../components/logo/logo.jsx'

const ListItem = List.Item

export default class Login extends Component{
  state={
    username:'',
    password:''
  }
  toRegister=()=>{
    this.props.history.replace('/register')
  }
  handleChange( name , val){
    this.setState({
      [name]: val
    })
  }
  login=()=>{
    console.log(this.state)
  }
  render(){
    return (
      <div>
        <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem onChange={val =>{this.handleChange('username',val)}}>用户名：</InputItem>
            <InputItem onChange={val =>{this.handleChange('password',val)}} type="password">密&nbsp;&nbsp;&nbsp;码</InputItem>
            <Button type='primary' onClick={this.login}>登录</Button>
            <Button onClick={this.toRegister}>未有账户，去注册</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}