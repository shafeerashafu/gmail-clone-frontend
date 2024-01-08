import axios from 'axios';

const API_URI = process.env.REACT_APP_BEURL;

const Gmail_API = async (urlObject,payload,type) => {
    return await axios({
        method:urlObject.method,
        url:`${API_URI}/${urlObject.endpoint}/${type}`,
        data:payload
    })
}

export default Gmail_API;