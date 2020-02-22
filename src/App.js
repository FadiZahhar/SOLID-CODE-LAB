import React from 'react';
/* impotyinh the Grid from material ui to do the styling */ 
import { Grid } from '@material-ui/core';

/* import our custom developed components, using simple oneline import
* will use the index.js */
import { SearchBar, VideoDetail } from './components'
//import SearchBar from './components/SearchBar';
//import VideoDetail from './components/VideoDetail';
/* importing youtube api to use axios to do the get Request method */
import youtube from './api/youtube';

/* class based component that extends react component */
class App extends React.Component {
    render() {
        return (
            <Grid justify="center" container spacing={16}>
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                        <SearchBar />
                        </Grid>
                        <Grid item xs={8}>
                        <VideoDetail />
                        </Grid>
                        <Grid item xs={12}>
                        {/* Video List */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;