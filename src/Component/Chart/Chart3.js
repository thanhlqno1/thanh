import React, { Component } from 'react';
import "./Chart.css";


class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      trangthai1 :0,
      trangthai2 :0,
      trangthai3 :0,
      trangthai4 :0,
      trangthai5 :0

      // onclick{() =>this.thongbao()}
    }
  }
  //  start
 render1 = () => {
    return(
      <div>
           <td  > 30 <a className="btn btn-primary btn-xl rounded-pill mt-5" style={{position: 'relative', top: '-27px'}} onClick={()=>{ this.edit1(); }} >Upvote</a>   </td> 
        
      </div>
   
      
      
    )
  }
  disrender1 = () => {
    return(
      <div>
        <td  > 31 <a className="btn btn-primary btn-xl rounded-pill mt-5" style={{position: 'relative', top: '-27px'}} onClick={()=>{ this.save1(); }} >Upvoted</a>   </td>
      </div>
    )
  }
  
   check1 = ( ) =>
   {
     if(this.state.trangthai1===0)
     { return this.render1(); }
     else
     {
       return this.disrender1();
     }

   }

   edit1 =() =>
   {
     this.setState({trangthai1:1});
   }
   save1 = () =>
   {
     this.setState({trangthai1:0});
   }
  //  end

  //  start
  render2 = () => {
    return(
      <div>
           <td  > 20 <a className="btn btn-primary btn-xl rounded-pill mt-5" style={{position: 'relative', top: '-27px'}} onClick={()=>{ this.edit2(); }} >Upvote</a>   </td> 
        
      </div>
   
      
      
    )
  }
  disrender2 = () => {
    return(
      <div>
        <td  > 21 <a className="btn btn-primary btn-xl rounded-pill mt-5" style={{position: 'relative', top: '-27px'}} onClick={()=>{ this.save2(); }} >Upvoted</a>   </td>
      </div>
    )
  }
  
   check2 = ( ) =>
   {
     if(this.state.trangthai2===0)
     { return this.render2(); }
     else
     {
       return this.disrender2();
     }

   }

   edit2 =() =>
   {
     this.setState({trangthai2:1});
   }
   save2 = () =>
   {
     this.setState({trangthai2:0});
   }
//  end

//  start
render3 = () => {
  return(
    
         <td  > 0 <a className="btn btn-primary btn-xl rounded-pill mt-5" style={{position: 'relative', top: '-27px'}} onClick={()=>{ this.edit3(); }} >Upvote</a>   </td> 
      
    
 
    
    
  )
}
disrender3 = () => {
  return(
    
      <td  > 1 <a className="btn btn-primary btn-xl rounded-pill mt-5" style={{position: 'relative', top: '-27px'}} onClick={()=>{ this.save3(); }} >Upvoted</a>   </td>
    
  )
}

 check3 = ( ) =>
 {
   if(this.state.trangthai3===0)
   { return this.render3(); }
   else
   {
     return this.disrender3();
   }

 }

 edit3 =() =>
 {
   this.setState({trangthai3:1});
 }
 save3 = () =>
 {
   this.setState({trangthai3:0});
 }
//  end
//  start
render4 = () => {
  return(
    
         <td  > 0 <a className="btn btn-primary btn-xl rounded-pill mt-5" style={{position: 'relative', top: '-27px'}} onClick={()=>{ this.edit4(); }} >Downvote</a>   </td> 
      
    
 
    
    
  )
}
disrender4 = () => {
  return(
    
      <td  > 1 <a className="btn btn-primary btn-xl rounded-pill mt-5" style={{position: 'relative', top: '-27px'}} onClick={()=>{ this.save4(); }} >Downvoted</a>   </td>
    
  )
}

 check4 = ( ) =>
 {
   if(this.state.trangthai4===0)
   { return this.render4(); }
   else
   {
     return this.disrender4();
   }

 }

 edit4 =() =>
 {
   this.setState({trangthai4:1});
 }
 save4 = () =>
 {
   this.setState({trangthai4:0});
 }
//  end
 
   

    render() {
        return (
            
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
                  {this.check1()} 
                   {/* <td>30  <button> up</button> </td>  */}
                   <td  > 0 <a className="btn btn-primary btn-xl rounded-pill mt-5" style={{position: 'relative', top: '-27px'}} onClick={()=>{ this.edit4(); }} >Downvote</a>   </td> 	

                </tr>
                
                <tr>
                  <td>2</td>
                  <td>Ngày Xuân Long Phụng Sum Vầy VITAS </td>
                  <td>Nhật Chàm x Hoàng</td>
                  <td>DucHong</td>
                  <td  > 24 <a className="btn btn-primary btn-xl rounded-pill mt-5" style={{position: 'relative', top: '-27px'}} onClick={()=>{ this.edit3(); }} >Upvote</a>   </td> 
                  <td  > 0 <a className="btn btn-primary btn-xl rounded-pill mt-5" style={{position: 'relative', top: '-27px'}} onClick={()=>{ this.edit4(); }} >Downvote</a>   </td> 
                </tr>
                <tr>
                  <td>3</td>
                  <td>Lava </td>
                  <td>Disney Music</td>
                  <td>Christophe </td>
                  {this.check2()}
                  {/* <td>20</td>
                  <td  > 20 <a className="btn btn-primary btn-xl rounded-pill mt-5" style={{position: 'relative', top: '-27px'}}  >Upvote</a>   </td> */}
                  <td  > 0 <a className="btn btn-primary btn-xl rounded-pill mt-5" style={{position: 'relative', top: '-27px'}} onClick={()=>{ this.edit4(); }} >Downvote</a>   </td> 
                </tr>
                
                <tr>
                  <td>4</td>
                  <td>Closed On Sunday </td>
                  <td>Kanye West</td>
                  <td>Sandra</td>
                  <td  > 17 <a className="btn btn-primary btn-xl rounded-pill mt-5" style={{position: 'relative', top: '-27px'}} onClick={()=>{ this.edit3(); }} >Upvote</a>   </td> 
                  <td  > 0 <a className="btn btn-primary btn-xl rounded-pill mt-5" style={{position: 'relative', top: '-27px'}} onClick={()=>{ this.edit4(); }} >Downvote</a>   </td> 
                </tr>
                <tr>
                  <td>5</td>
                  <td>Boss Lady</td>
                  <td>Wendy Child</td>
                  <td>Sunny</td>
                  <td  > 15 <a className="btn btn-primary btn-xl rounded-pill mt-5" style={{position: 'relative', top: '-27px'}} onClick={()=>{ this.edit3(); }} >Upvote</a>   </td> 
                  <td  > 0 <a className="btn btn-primary btn-xl rounded-pill mt-5" style={{position: 'relative', top: '-27px'}} onClick={()=>{ this.edit4(); }} >Downvote</a>   </td> 
                </tr>
                
                <tr>
                  <td>6</td>
                  <td>Tomorrow </td>
                  <td>Vũ Cát Tường</td>
                  <td>Thuynguyen</td>
                  <td  > 10 <a className="btn btn-primary btn-xl rounded-pill mt-5" style={{position: 'relative', top: '-27px'}} onClick={()=>{ this.edit3(); }} >Upvote</a>   </td> 
                  <td  > 0 <a className="btn btn-primary btn-xl rounded-pill mt-5" style={{position: 'relative', top: '-27px'}} onClick={()=>{ this.edit4(); }} >Downvote</a>   </td> 
                </tr>
                <tr>
                  <td>7</td>
                  <td>Wannabe </td>
                  <td>Spice Girls</td>
                  <td>THANHLE</td>
                  {this.check3()} 
                  {this.check4()}
                  
                </tr>
                
              </tbody>
            </table>
          </div>
        </section>
        
        
        );
    }
}

export default Chart;