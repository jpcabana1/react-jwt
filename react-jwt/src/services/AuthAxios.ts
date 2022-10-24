import axios from "axios";

export const authInstance = axios.create({
    baseURL: 'https://localhost:7082',
    timeout: 1000,
    withCredentials: true
});

export const weatherInstance = axios.create({
    baseURL: 'https://localhost:7026',
    timeout: 1000,
    withCredentials: true
});