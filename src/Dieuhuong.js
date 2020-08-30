import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  import TopMenu from "./Component/Topmenu/Topmenu.js";
import Header from "./Component/Header/Header.js";
import Content from "./Component/Content/Content.js";
import Footer from "./Component/Footer/Footer.js";
import Chart from "./Component/Chart/Chart.js";
import Contacts from "./Contacts";
import Contact2 from "./Contact2";
import Contact3 from "./Contact3";
import TopMenu2 from "./Component/Topmenu/Topmenu2.js";
import Chart2 from "./Component/Chart/Chart2.js";
import Chart3 from "./Component/Chart/Chart3.js";

class Dieuhuong extends Component {
    render() {
        return (
            <div>
                <Switch>
          <Route exact path="/">
          <TopMenu/>
          <Header/>
        <Content />
        <Chart/>
          </Route>
          <Route exact path="/signup">
          <TopMenu/>
          <Contacts/>
        
        
          </Route>
          <Route exact path="/login">
          <TopMenu/>
          <Contact2/>
          </Route>
         
          <Route exact path="/home/id=17">
          <TopMenu2/>
          <Header/>
         <Content />
         <Chart3/>
          </Route>
          <Route exact path="/addsong/id=17">
          <TopMenu2/>
          <Contact3/>
          
         
          </Route>
          <Route exact path="/home">
          <TopMenu/>
         
         <Chart2/>
          </Route>

          
          </Switch>
            </div>
        );
    }
}

export default Dieuhuong;