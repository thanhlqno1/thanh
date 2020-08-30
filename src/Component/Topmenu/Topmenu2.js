import React, { Component } from 'react';

class Topmenu extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top" style={{height: '100px' , background: 'white'}}>>
              <div className="container">
              <a className="navbar-brand" href="/home" style={{position: 'static', right: '974px', fontSize: 'x-large', color: 'black'}}>CES Company Music App</a>
                                                           
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                  <a className="nav-link"  href="/signup" style={{position: 'relative', right: '-180px', color: 'black'}}>thanhle</a>
                  </li>
                  
                  <li className="nav-item">
                  <a className="nav-link" href="/login" style={{position: 'relative', right: '-180px', color: 'black'}}>Log Out</a>
                  </li>
                </ul>
              </div>
              
            </div>
            
      
            
            
      
            <div style={{position: 'fixed', top: '0px', left: '0px'}}>
        <img className="card-img-top" src="https://ci6.googleusercontent.com/proxy/SarfF3BpC4OuOud-VhWesVzVe2otW2RAJR8GdqP2qVIV1JWJcdLmN0IYC2M95ROqmnqlmqiiYsZ5YSSk6VKmmpB0osWD6EOxrBxyQgg4ipAvmMJmNZbPQK3TW1--lwMXKTctwl1fue8xiIhTEC519ZHg9bFK59nRxhkpL8r72wZ9TOYnIvryimC1H87Ct_RfLD3Fb96NkbohnlPSow=s0-d-e1-ft#https://docs.google.com/uc?export=download&id=1oq_75wZCdGSxWQHwliYaFCVlhYk_1QE9&revid=0B-s_RXDVqdb6Z1dCYjh6blMxZEZybkVoR2FLRXRvVi82am5NPQ" alt="" />
      </div>
          </nav>
      </div>
    );
  }
}

export default Topmenu;