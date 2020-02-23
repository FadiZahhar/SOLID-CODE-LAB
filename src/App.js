import React from 'react';
/* impotyinh the Grid from material ui to do the styling */ 
import { Grid } from '@material-ui/core';

/* import our custom developed components, using simple oneline import
* will use the index.js */
import { SearchBar, VideoDetail, VideoList } from './components'
//import SearchBar from './components/SearchBar';
//import VideoDetail from './components/VideoDetail';
/* importing youtube api to use axios to do the get Request method */
import youtube from './api/youtube';

/* class based component that extends react component */
class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount() {
        this.handleSubmit('wpbeirut');
    }
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }
    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', { 
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyDESFRuYKHXM8wM3Suo24E1jFn2OpCRWSA',
                q: searchTerm,
            }
        
        });

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    
    render() {
        const { selectedVideo, videos } = this.state;
        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={12}>
                        <Grid item xs={12}>
                        <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                        <VideoDetail video={this.state.selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                        <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;