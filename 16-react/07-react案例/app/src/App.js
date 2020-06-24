import React from 'react';
import {Route} from "react-router-dom"
import Login from "./Login/login"
import "./asset/app.css"



class App extends React.Component{
  render(){
    return(
      <div className="app">
        
        
       
        <Route path="/login" component={Login}></Route>
      </div>
    )
  }
}

export default App;
