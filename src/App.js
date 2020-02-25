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
// importing the react route
import { BrowserRouter , Router, Switch, Route, Redirect } from 'react-router-dom';
// import topnav 
import TopNav from './components/topnav';
// import the Sign in form.
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
// import the app style
import './App.css';
/* class based component that extends react component */
class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount() {
        this.handleSubmit('linda de suza');
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
<div>
    <TopNav />
				<BrowserRouter>
                <div className="App">
                <Route exact path="/" render={() => ( <Redirect to="/signin"/>)} />
						<Switch>
						<Route path="/signin" component={SignIn} />	
                        <Route path="/signup" component={SignUp} />	
						</Switch>
					</div>
				</BrowserRouter>
			</div>


        )
    }
}

export default App;