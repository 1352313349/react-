import React from "react"
import { Card, Input, Button, Select,Table, } from 'antd';

import { PlusOutlined } from '@ant-design/icons';
import {reqProducts,reqSearchProducts} from "../../api/index"

const { Option } = Select;

export default class ProductHome extends React.Component {

    state={
        products:[],
        total:0,//商品总数
        searchName:"",//搜索框内关键字
        searchType:"productName",//搜索类型

    }
    initColums=()=>{
        this.columns=[
            {
              title: '商品名称',
              dataIndex: 'name',
              
            },
            {
              title: '商品描述',
              dataIndex: 'desc',
              
            },
            {
              title: '价格',
              dataIndex: 'price',
              render:(price)=>"￥"+price
             
            },
            {
                title: '状态',
                dataIndex: 'status',
                render:()=>(
                    <div>
                        <Button type="primary">下架</Button>
                    <span>在售</span>

                    </div>
                )  
              },
              {
                title: '操作',
                dataIndex: 'action',
                render:()=>(
                    <div>
                        <span>详情</span>
                        <span style={{display:'block'}}>修改</span>
                    </div>
                )
               
              },
          ];
    }
    // 请求商品数据
    getProducts= async (pageNum,pageSize)=>{
        let {searchName,searchType}=this.state
        let result
        if(searchName){
            result=await reqSearchProducts(pageNum,pageSize,searchName,searchType)
        }else{
            result= await reqProducts(pageNum,pageSize)
        }
       
    
    if(result.data.status==0){
        const {total,list} =result.data.data
        this.setState({
            total,
            products:list
        })

    }
   

    }
    // 初始化表头数据
    componentWillMount(){
        this.initColums()
    }
    componentDidMount(){
        this.getProducts(1,2)

    }

    render() {
        const {products,total,searchName,searchType}=this.state
        let title = (
            <div style={{float:"left"}}>
                <Select 
                style={{ width: 150 }}  
                defaultValue="productName"
                Value={searchType}
                onChange={value=>this.setState({searchType:value})}
            >
                <Option value="productName">按名称搜索</Option>
                <Option value="productDesc">按内容搜索</Option>
                </Select>
                <Input style={{width:150 ,margin:"0 20px"}} placeholder="关键字" 
                value={searchName}
                onChange={e=>this.setState({searchName:e.target.value})}/>
                <Button type="primary" onClick={()=>this.getProducts(1,2)}>搜索</Button>

            </div>
        )
        let extra=(
            <Button type="primary"><PlusOutlined />添加商品</Button>
        )
        
          
          



        return (
            <div>
                <Card title={title} extra={extra} style={{ width: '100%' }}>
                <Table bordered dataSource={products} columns={this.columns}
                rowKey="_id"
                pagination={{total,defaultPageSize:2,
                    onChange:this.getProducts
                    
                }} />
                </Card>
            </div>




        )
    }
}