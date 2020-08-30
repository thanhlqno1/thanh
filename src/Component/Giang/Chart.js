import React from 'react';
import "./Chart.css";
import VoteButton from './VoteButton';


class Chart extends React.Component {
    state = {
      video: null
    };

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
                  {/* <th>Thumbnail</th> */}
                  <th>Title</th>
                  <th>Artist</th>
                  <th>Post by</th>
                  <th>Upvote</th>
                  <th>Downvote</th>
                </tr>
              </thead>
            </table>
          </div>
      
          {/* <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/> */}
          <div className="tbl-content">
            <table cellPadding={0} cellSpacing={0} border={0}>
              <tbody>
                <tr>
                  <td>1</td>
                  {/* <td>
                  <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
                  </td> */}
                  <td>Hello </td>
                  <td>Adele</td>
                  <td>nvduc</td>
                  <td><VoteButton/></td>
                  <td><VoteButton/></td>
                </tr>
                {/* <tr>
                  <td>2</td>
                  <td>Beautiful Sai Gon</td>
                  <td>Thái Việt G , Nah</td>
                  <td>Nguyen Thanh Huy</td>
                  <td>800</td>
                  <td>0</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </section>
        
        
        );
    }
}

export default Chart;