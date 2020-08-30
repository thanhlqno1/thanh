import React from 'react';

class Searchbar extends React.Component {
    state = {
        query: ''
    };
    handleChange = (event) => {
        this.setState({
            query: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.query);
    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search">Video Search:</label>
                        <input onChange={this.handleChange} 
                               name='video-search' 
                               type="text" 
                               value={this.state.query}
                               placeholder='Seach for your favorite song...'/>
                    </div>
                </form>
            </div>
        )
    }
}
export default Searchbar;