import React from "react"
import {Route} from "react-router-dom"
import BrandManage from "./children/brandManage"
import ProductManage from "./children/productManage"
export default class Product extends React.Component{
    render(){
        return(
            <div>
               商品

               <Route path="/product/brand" component={BrandManage}></Route>
               <Route path="/product/manage" component={ProductManage}></Route>
            </div>
        )
    }
}