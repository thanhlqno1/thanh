import React, { Component } from 'react';
import "./Content.css";

class Content extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <section>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 order-lg-2">
                  <div className="p-5">
                    <img className="img-fluid rounded-circle" src="img/01.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 order-lg-1">
                  <div className="p-5">
                    <h2 className="display-4"></h2>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Content;

