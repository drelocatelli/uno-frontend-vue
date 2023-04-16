import axios from "axios";

// axios.defaults.withCredentials = true;
export const instance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*', 
        'Content-Type': 'application/json'
    }
});