import React from "react"
import "./login.css"
import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Redirect} from "react-router-dom"

import {reqLogin} from "../../api/index"
import storage from "../../utils/storage"
import localStorage from "../../utils/locallStorage"


export default class Login extends React.Component {

    onFinish = async values => {
        // console.log('Received values of form: ', values);
        let {username,password}=values
        const response= await reqLogin(username,password)
        console.log("登陆成功",response.data)
        let res =response.data
        if(res.status===0){
            storage.user=res.data   //将数据保存到内存中
            localStorage.setUser(res.data) //保存用户信息到本地
            message.success("登陆成功")
            this.props.history.replace("/admin")
           
            
             console.log(storage.user)

        }else{
            message.error(res.msg)
        }
      }


    
    render() {
       
        // 判断是否登录，如果登录直接跳转到后台首页面
        let user=storage.user
        if(user && user._id){
            // this.props.history.replace("/login")
           return <Redirect to="/admin"></Redirect>
        }
        
        return (
            <div className="login">
                <header>
                    <h1>后台管理系统</h1>
                </header>
                <section>
                    <h3>用户登录</h3>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                        
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                                {
                                    min:2,
                                    message:"密码必须大于两位"

                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Forgot password
        </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
        </Button>
        
                        </Form.Item>
                    </Form>

                </section>


            </div>
        )
    }
}
