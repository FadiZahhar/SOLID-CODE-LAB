import axios from 'axios';
/* here we can export the axios and specify 
* baseUrl and the params to call the youtube API V3
*
*/
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
})