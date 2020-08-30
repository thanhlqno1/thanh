import React from 'react';
import "./Header.css";

class Header extends React.Component {
    render() {
        return (
            <header className="masthead text-center text-white" style={{position: 'relative', top: '89px'}}>
        <div className="masthead-content">
          <div className="container">
            <h1 className="masthead-heading mb-0">Post your favorite</h1>
            <h2 className="masthead-subheading mb-0">Share to us</h2>
            <a href="/addsong/id=17" className="btn btn-primary btn-xl rounded-pill mt-5">Post now</a>
            <a href="#" className="fa fa-thumbs-down"></a>
            
          </div>
        </div>
        <div className="bg-circle-1 bg-circle" />
        <div className="bg-circle-2 bg-circle" />
        <div className="bg-circle-3 bg-circle" />
        <div className="bg-circle-4 bg-circle" />
      </header>
          
        );
    }
}

export default Header;