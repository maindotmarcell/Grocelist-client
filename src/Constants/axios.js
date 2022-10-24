import axios from 'axios';
const instance = axios.create({
	baseURL: 'https://grocelist-server.herokuapp.com/',
});
export default instance;
