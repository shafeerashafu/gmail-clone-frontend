import {useState} from 'react';
import {Gmail_API} from '../Services/crudApi.js';

const useAPI = (urlObject) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    

    const call = async (payload,type='') => {
        setResponse(null);
        setIsLoading(true);
        setError("");
        
        try {
            let res = await Gmail_API(urlObject, payload, type);
            setResponse(res);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }
  return {call,response,error,isLoading};
}

export default useAPI;