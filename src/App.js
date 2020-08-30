import React from 'react';

import './App.css';
import TopMenu from "./Component/Topmenu/Topmenu.js";
import Header from "./Component/Header/Header.js";
import Content from "./Component/Content/Content.js";
import Footer from "./Component/Footer/Footer.js";
import Chart from "./Component/Chart/Chart.js";
import Dieuhuong from "./Dieuhuong";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";






class App extends React.Component {
  render() {
    return (
      <Router>
      <div  >

        
      
        
        <Dieuhuong/>
        
        
      
        
        

        <Footer/>
      </div>
      </Router>

    );
  }
}




export default App;
