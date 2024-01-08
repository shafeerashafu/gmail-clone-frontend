import axios from 'axios';

const API_URI = 'https://gmail-clone-backend-w9qb.onrender.com';

const Gmail_API = async (urlObject,payload,type) => {
    return await axios({
        method:urlObject.method,
        url:`${API_URI}/${urlObject.endpoint}/${type}`,
        data:payload
    })
}

export default Gmail_API;