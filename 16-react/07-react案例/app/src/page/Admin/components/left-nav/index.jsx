import React from "react"
import { Link, withRouter } from "react-router-dom"
import { Layout, Menu } from 'antd';

import {BarChartOutlined, TeamOutlined,UserOutlined, UploadOutlined,PieChartOutlined} from '@ant-design/icons';
const { SubMenu } = Menu;

const { Content, Footer, Sider } = Layout;


class LeftNav extends React.Component {
    render() {
        let path=this.props.location.pathname
        console.log(path)
        return (
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
            >
                <div className="logo" ><h1>商品管理系统</h1></div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[path]}
                >
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
            </Sider>
        )
    }
}
export default withRouter(LeftNav)