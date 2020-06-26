import React from 'react';
import {Route} from "react-router-dom"
import Login from "./page/Login/login"
import Admin from "./page/Admin/admin"
import "./asset/app.css"



class App extends React.Component{
  render(){
    return(
      <div className="app">
        
        
       <Route path="/" component={Admin}></Route>
        <Route path="/login" component={Login}></Route>
      </div>
    )
  }
}

export default App;
