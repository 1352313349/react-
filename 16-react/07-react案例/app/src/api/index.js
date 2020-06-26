import ajax from "./ajax"

import jsonp from "jsonp"
import { message } from 'antd';

// let BASE_URL=""
// 发送登录请求
export const reqLogin =(username,password)=>ajax("/login",{username,password},"POST")

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