// import axios from 'axios';

// const API_URI = process.env.REACT_APP_BEURL;

// const Gmail_API = async (urlObject,payload,type) => {
//     return await axios({
//         method:urlObject.method,
//         url:`${API_URI}/${urlObject.endpoint}/${type}`,
//         data:payload
//     })
// }

// export default Gmail_API;

import axios from 'axios';

const API_URI = process.env.REACT_APP_BEURL;

const Gmail_API = async (urlObject, payload, type = '') => {
    const { method, endpoint } = urlObject;

    try {
        let response;
        if (method === 'GET') {
            response = await axios.get(`${API_URI}/${endpoint}/${type}`);
        } else if (method === 'POST') {
            response = await axios.post(`${API_URI}/${endpoint}/${type}`, payload);
        } else if (method === 'PUT') {
            response = await axios.put(`${API_URI}/${endpoint}/${type}`, payload);
        } else if (method === 'DELETE') {
            response = await axios.delete(`${API_URI}/${endpoint}/${type}`);
        } else {
            throw new Error('Invalid HTTP method');
        }
        console.log('Response:', response);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// export default Gmail_API;

const backendInstance = axios.create({
    // baseURL: "http://localhost:8000/api",
    baseURL : API_URI,
    timeout: 10000,
});

//creating a user for registering
const signupUser = async (userData) => {
    const response = await backendInstance.post("/signup", {
      ...userData,
    });
    return response.data;
};

//when the user needs to login
const loginUser = async (loginData) => {
    try {
      const response = await backendInstance.post("/login", {
        ...loginData,
      });
      return { ...response.data };
    } catch (err) {
      console.log(err);
      return { msg: "Login failed", code: 0 };
    }
};


const logoutUser = async () => {
    try {
        const response = await backendInstance.post("/logout");
        if (response.status === 200) {
            return { msg: "Logout successful", code: 1 };
        } else {
            return { msg: "Logout failed", code: 0 };
        }
    } catch (err) {
      
        return { msg: "Logout failed", code: 0 };
    }
};



export {Gmail_API,signupUser,loginUser,logoutUser};