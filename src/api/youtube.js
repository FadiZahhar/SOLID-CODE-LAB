import axios from 'axios';
const KEY = 'AIzaSyDESFRuYKHXM8wM3Suo24E1jFn2OpCRWSA';
/* here we can export the axios and specify 
* baseUrl and the params to call the youtube API V3
*
*/
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})