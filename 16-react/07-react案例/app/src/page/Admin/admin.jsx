import React from "react"
import "./admin.css"
import {Route,Redirect,Switch} from "react-router-dom"


import Header from "./components/Header/header" 
import LeftNav from "./components/left-nav"
import Home from "../Home/home"
import ProductManage from "../Product/productManage"
import BrandManage from "../BrandManage/brandManage"
import User from "../User/user"
import Role from "../Role/role"
import Chart from "../Chart/chart"
import Order from "../Order/order"
import storage from "../../utils/storage"

import { Layout, Menu } from 'antd';



const { Content, Footer, Sider } = Layout;

export default  class Admin extends React.Component {
    render() {
        let user=storage.user
        // console.log(storage.user)
        if(!user || !user._id){
            // this.props.history.replace("/login")
           return <Redirect to="/login"></Redirect>
        }
        
      
        
        return (
           
            <Layout style={{ height: '100%' }}>
                {/* <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <div className="logo" ><h1>商品管理系统</h1></div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to="/home">首页</Link>
        </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="商品">
                            <Menu.Item key="2" icon={<PieChartOutlined />}><Link to="/brand">品牌管理</Link></Menu.Item>
                            <Menu.Item key="3" icon={<PieChartOutlined />}><Link to="/product">商品管理</Link></Menu.Item>

                        </SubMenu>
                        <Menu.Item key="4" icon={<UploadOutlined />}>
                            <Link to="/user">用户管理</Link>
        </Menu.Item>
                        <Menu.Item key="5" icon={<BarChartOutlined />}>
                           <Link to="/role">角色管理</Link> 
        </Menu.Item>

                        <SubMenu key="sub2" icon={<UserOutlined />} title="图形列表">
                            <Menu.Item key="6" icon={<PieChartOutlined />}>柱形图</Menu.Item>
                            <Menu.Item key="7" icon={<PieChartOutlined />}>折线图</Menu.Item>
                            <Menu.Item key="8" icon={<PieChartOutlined />}>饼图</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<TeamOutlined />}>
                           <Link to="/order">订单管理</Link> 
        </Menu.Item>

                    </Menu>
                </Sider> */}
                <LeftNav></LeftNav>
                <Layout className="site-layout" style={{ marginLeft: 200 }}>
                    <Header></Header>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                           
          <br />
        <Switch>

        <Route path="/home" component={Home}></Route>
          <Route path="/product" component={ProductManage}></Route>
          <Route path="/brand" component={BrandManage}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/role" component={Role}></Route>
          <Route path="/chart" component={Chart}></Route>
          <Route path="/order" component={Order}></Route>
          <Redirect to="/home"></Redirect>
        </Switch>
          
          
        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>

           


        )
    }
}
