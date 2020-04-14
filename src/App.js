import React, { Component } from 'react';
// import './App.css';
import Nodal from './Modal'
import Nav from './Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import  quizstructure from './Productlist'

class App extends Component {
  render() {
    return (
      <div className="App" >
       
               <Nav />

         <Switch>

          <Route exact path="/" component={quizstructure}/>
            {/* <Route exact path="/detail" component={Detail}/> 
            <Route exact path="/cart" component={Cart}/>  */}

          
        </Switch> 
        
          
        < Nodal/> 
        
         



        
      </div>
    );
  }
}

export default App;
