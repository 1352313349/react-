import React from "react"

import { Route, Switch } from "react-router-dom"

import ProductHome from "./Home"
import ProductUpdataadd from "./UpdataAdd"
import ProductDetai from "./Detail"


export default class ProductManage extends React.Component {

  render(){
          



        return (
            <div>
            


                <Switch>
                <Route path="/product/" exact component={ProductHome}></Route>
                <Route path="/product/updataadd" component={ProductUpdataadd}></Route>
                <Route path="/product/detail" component={ProductDetai}></Route>
                </Switch>
                

            </div>




        )
    }
}