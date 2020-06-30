import React from "react"
import { Card } from 'antd';
import {LeftOutlined} from '@ant-design/icons';
export default class ProductDetail extends React.Component {
    render() {
        const title=(
            <div  style={{float:'left'}} >
               <LeftOutlined style={{color:'green'}} /> <span >商品详情</span>

            </div>
        )
        return (
            <div>
                <Card  title={title} style={{ width: '100%' }}>

                <h3>商品价格</h3>
            </Card>


            </div>
            
        )
    }
}