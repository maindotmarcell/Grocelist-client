import axios from 'axios';
const instance = axios.create({
	baseURL: 'https://grocelist-server.herokuapp.com/api/whatever-the-call-is',
});
export default instance;
