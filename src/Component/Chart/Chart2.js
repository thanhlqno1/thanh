import React, { Component } from 'react';
import "./Chart.css";


class Chart extends React.Component {
    render() {
        return (
            
            <div> 
                <div><iframe width={420} height={315} src="https://www.youtube.com/embed/PT2_F-1esPk?autoplay=1&start=128&enablejsapi=1 " style={{position: 'relative', top: '120px', right: '-30px'}} /></div>
                <div>
                
            
            <th style={{position: 'relative', top: '-186px' ,right: '-500px'}}>Song playing:</th>
            <td style={{position: 'relative', top: '-186px' ,right: '-500px'}}>Closer</td>
                </div>
            
            
            <th style={{position: 'relative', top: '-186px' ,right: '-500px'}}>Next song:</th>
            <td style={{position: 'relative', top: '-186px' ,right: '-500px'}}>Ngày Xuân Long Phụng Sum Vầy VITAS</td>
          <section>
          {/*for demo wrap*/}
          
          <m1>Today's Chart</m1>
          <div className="tbl-header">
            <table cellPadding={0} cellSpacing={0} border={0}>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Title</th>
                  <th>Artist</th>
                  <th>Post by</th>
                  <th>Upvote</th>
                  <th>Downvote</th>


                  
                  
                </tr>
              </thead>
            </table>
          </div>
          <div className="tbl-content">
            <table cellPadding={0} cellSpacing={0} border={0}>
              <tbody>
              <tr>
                  <td>1</td>
                  <td>Closer </td>
                  <td>The Chainsmokers</td>
                  <td>Matthew</td>
                  <td>30</td>
                  <td>0</td>	

                </tr>
                
                <tr>
                  <td>2</td>
                  <td>Ngày Xuân Long Phụng Sum Vầy VITAS </td>
                  <td>Nhật Chàm x Hoàng</td>
                  <td>DucHong</td>
                  <td>24</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Lava </td>
                  <td>Disney Music</td>
                  <td>Christophe </td>
                  <td>20</td>
                  <td>0</td>
                </tr>
                
                <tr>
                  <td>4</td>
                  <td>Closed On Sunday </td>
                  <td>Kanye West</td>
                  <td>Sandra</td>
                  <td>17</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Boss Lady</td>
                  <td>Wendy Child</td>
                  <td>Sunny</td>
                  <td>15</td>
                  <td>0</td>
                </tr>
                
                <tr>
                  <td>6</td>
                  <td>Tomorrow </td>
                  <td>Vũ Cát Tường</td>
                  <td>Thuynguyen</td>
                  <td>10</td>
                  <td>0</td>

                </tr>
                

                
                
              </tbody>
            </table>
          </div>
        </section>
        </div>
        
        
        
        );
    }
}

export default Chart;