import React from "react"
import { Card, Table, Space, message, Form, Input, } from 'antd';
import { Modal, Button } from 'antd';

import { Route } from "react-router-dom"



import { reqCategory, reqaddCategory, reqUpdateCategory } from "../../api/index"
import { PlusOutlined } from '@ant-design/icons';

export default class BrandManage extends React.Component {
  state = {
    categorys: [],
    columns: [],
    
    SubCategory:[],//二级分类内容
    parentId:"0",//当分类列表为一级分类的id
    parentName:"",//一级分类的名字
    showStatus:0,//控制添加修改框是否显示
    updataName:"",//更新分类框中内容
    updataId:0,

  }
  
 

  // 初始化表头
  initColums = () => {
    const columns = [
      {
        title: '分类名称',
        dataIndex: 'name',
        
      },
      {
        title: '操作',
        width: 300,
        render: (category) => (
          <Space>
           {this.state.parentId==='0'?<button onClick={()=>{this.showSubCategory(category)}}>查看子分类</button>:null} 
            <button onClick={()=>this.shouUpdata(category)}>修改分类</button>

          </Space>
        )
      },
    ];
    this.setState({ columns })
  }
  // ajax获取列表数据
  getCategory = async () => {
    let {parentId}=this.state
    
    const result = await reqCategory(parentId)
    // console.log(result)
    
    if (result.data.status === 0) {
      
      const categorys = result.data.data
      if(parentId==='0'){
        console.log(categorys)
        this.setState({ categorys })
      }else{
        this.setState({SubCategory:categorys})
      }
     
      //  console.log(this.state.categorys)
      // message.success("获取列表成功")

    } else {
      message.error("获取列表失败")
    }
  }
  // 获取二级分类页面
  showSubCategory=(category)=>{
    // console.log(category)
    this.setState({
      parentId:category._id,
      parentName:category.name


    },()=>{
      this.getCategory()
    })

  }
  // 显示一级列表
  showCategory=()=>{
    this.setState({
      parentId:'0',
      parentName:"",
      SubCategory:[]

    })
  }
  // 点击更新分类按钮
  shouUpdata=(category)=>{
    // console.log(category)
    // this.category=category
    this.setState({
      showStatus:2,
      updataName:category.name,
      updataId:category._id


    },()=>{
      // console.log(this.state.updataName,this.state.updataId)
    })
   
  }


  componentWillMount() {
    this.initColums()

  }
  componentDidMount() {
    this.getCategory()
  }
   

  render() {
    let {parentId,categorys,SubCategory,parentName,showStatus,updataName} =this.state
   
//  添加分类确定
    const  onFinish = async values => {
      // console.log(values)
      let {addcategoryname} =values
      // 添加分类
      const res= await reqaddCategory(addcategoryname)
      // console.log(res)
     
    }

    // 更新分类确定
    const onFinishtwo= async values=>{
      let {categoryname}=values
      // console.log(categoryname)
      
      this.setState({
        showStatus:0
      })
      // console.log(this.category)
      // let categoryId=this.category._id
      let categoryId=this.state.updataId
      console.log(categoryname,categoryId)
      // // // 调接口  categoryId,categoryname

      let res=await reqUpdateCategory(categoryId,categoryname)
      console.log(res)
      // if(res.data.status===0){
      //   this.getCategory()
      // }

    } 


    // 取消添加/更新分类
   const handleCancel=()=>{
      this.setState({
        showStatus:0
      })
    }

    // 显示添加界面
  const showModal = () => {
    this.setState({
     showStatus:1
    });
  };
 let title = parentId==='0' ? "一级分类列表" : (
   <span>
     <button onClick={this.showCategory}>一级分类列表</button>
     <span>  </span>
 <span>{parentName}</span>

   </span>

 )

    return (
      <div>

        <Card
          title={title}
          style={{ width: '100%' }}
          extra={<Button type="primary" onClick={showModal}>
            
            <PlusOutlined /> 添加
        </Button>}
        >
          <Table bordered dataSource= {parentId==='0'? categorys:SubCategory} columns={this.state.columns}
          rowKey="_id"/>;
        </Card>

        <Modal
          title="添加分类"
          visible={showStatus===1}
          footer={null}

          
          onCancel={handleCancel}
        >
          <Form
            onFinish={onFinish}
          >
            <Form.Item
              name="addcategoryname"
            >
              <Input />
            </Form.Item>
            <Form.Item >
            <Button type="primary" onClick={handleCancel}>
                取消
        </Button>
              <Button type="primary" htmlType="submit" style={{float:"right"}}>
                确定
        </Button>
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title="修改分类"
          visible={showStatus===2}
          footer={null}
          onCancel={handleCancel}
        >
          <Form
            onFinish={onFinishtwo}
          >
            <Form.Item
              name="categoryname"
              rules={[{required:true,message:"不能为空"}]}
            >
              <Input placeholder={updataName}/>
            </Form.Item>
            <Form.Item >
            <Button type="primary" onClick={handleCancel}>
                取消
        </Button>
              <Button type="primary" htmlType="submit" style={{float:"right"}}>
                确定
        </Button>
            </Form.Item>
          </Form>
        </Modal>

      </div>






    )


  }
}