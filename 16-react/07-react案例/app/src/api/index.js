import ajax from "./ajax"

import jsonp from "jsonp"
import { message } from 'antd';

// let BASE_URL=""
// 发送登录请求
export const reqLogin =(username,password)=>ajax("/login",{username,password},"POST")

// 请求分类列表
export const reqCategory=(parentId)=>ajax("manage/category/list",{parentId})

// 添加分类
export const reqaddCategory=( parentId,categoryname)=>ajax('/manage/category/add',{parentId,categoryname},'POST')

// 更新分类
export const reqUpdateCategory=(categoryId,categoryname)=>ajax('/manage/category/update',{categoryId,categoryname},'POST')



// 获取商品分页列表
export const reqProducts  =(pageNum,pageSize)=>ajax('manage/product/list',{pageNum,pageSize})
// 根据关键字搜索产品分页
// export const reqSearchProducts=(pageNum,pageSize,searchName,productName,productDesc)=>ajax('/manage/product/search',{pageNum,pageSize,searchName,productName,productDesc})
export const reqSearchProducts=(pageNum,pageSize,searchName,searchType)=>ajax('/manage/product/search',
{pageNum,pageSize,[searchType]:searchName})


// 发送天气请求
export const reqWeather=(city)=>{
    return new Promise((resolve,reject)=>{
        let url=`http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
        jsonp(url,{},(error,data)=>{
            if(data.status==="success"){
                let {dayPictureUrl,weather} =data.results[0].weather_data[0]
                resolve({dayPictureUrl,weather})
            }else{
                message.error("获取天气失败")

            }
        })
    })
}