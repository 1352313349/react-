import React from "react"
import "./header.css"
import {withRouter} from "react-router-dom"
import LinkButton from "../LinkButton/linkbutton"
import  {formatDate,getDate} from "../../../../utils/getdate"
import {reqWeather} from "../../../../api/index"
import lacalstorage from "../../../../utils/locallStorage"
import storage from "../../../../utils/storage"

import { Modal} from 'antd';


const { confirm } = Modal;


 class Header extends React.Component{
    state={
        currentTime:formatDate(Date.now()),
        dayPicture:"",
        weather:""
    }
    getTime=()=>{
        setInterval(()=>{
            // const currentTime=formatDate(Date.now())
            const currentTime=getDate()
            this.setState({currentTime})
        },1000)
    }
    getWeather = async()=>{
        const {dayPictureUrl,weather} =await reqWeather("郑州")
        this.setState({
            dayPicture:dayPictureUrl,
            weather
        })

    }
    logout=()=>{
        
            confirm({
              title: '你确定要退出吗',
             
              onOk:()=>{
                // alert('OK');
                storage.user= {}
                lacalstorage.removeUser()
                this.props.history.replace("/login")
              },
              onCancel() {
                // alert('Cancel');
              },
            });
          

    }
    componentDidMount(){
        this.getTime()
        this.getWeather()
    }
    render(){
        return(
            <div className="header">
                <div  className="header-top" >
                    <span>欢迎，admin</span>
                    <LinkButton onClick={this.logout}>退出</LinkButton>
                    
                </div>
                <div className="header-bottom">
                    <div className="header-botton-left">首页</div>
                    <div className="header-botton-right">
                        <span>{this.state.currentTime}</span>
                        <img src={this.state.dayPicture} alt=""/>
        <span>{this.state.weather}</span>

                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(Header)