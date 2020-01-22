import React, {Component} from 'react'

import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  Radio,
  Button
  } from 'antd-mobile' 
import Logo from '../../components/logo/logo.jsx'

const ListItem = List.Item
export default class Register extends Component{
  state={
    username:'',
    password:'',
    password2:'',
    type:'laoban'  // dashen,laoban
  }
  handleChange( name , val){
    this.setState({
      [name]: val
    })
  }
  register=()=>{
    console.log(this.state)
  }
  toLogin=()=>{
    this.props.history.replace('/login')
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
            <InputItem onChange={val =>{this.handleChange('password2',val)}} type="password">确认密码</InputItem>
            <ListItem>
              <span>用户类型</span>&nbsp;&nbsp;
              <Radio checked={this.state.type==='dashen'} onChange={val =>{this.handleChange('type','dashen')}} >大神</Radio>
                &nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={this.state.type==='laoban'} onChange={val =>{this.handleChange('type','laoban')}} >老板</Radio>
            </ListItem>
            <Button type='primary' onClick={this.register}>注册</Button>
            <Button onClick={this.toLogin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}