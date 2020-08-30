import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Chart from '../Component/Giang/Chart'

class AddPlay extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
        addedSong: false
    }

    handleSubmit = async (queryFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: queryFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items
        })
    }

    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    handleAddSong = () => {
        this.setState({addedSong: true})
    }

    render() {
        if (!this.state.addedSong){
            return (
                <div className='container'>
                    <div className='ui container' style={{marginTop: '1em'}}>
                        <SearchBar handleFormSubmit={this.handleSubmit}/>
                        <div className='ui grid'>
                            <div className="ui row">
                                <div className="eleven wide column">
                                    <VideoDetail video={this.state.selectedVideo} handleAddSong={this.handleAddSong}/>
                                </div>
                                <div className="five wide column">
                                    <strong>Search Results:</strong>
                                    <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        else return(
            <Chart /*video={this.state.selectedVideo}*//>
        );
    }
}

export default AddPlay;