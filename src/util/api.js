import axios from 'axios';

const api = axios.create({
    baseURL: 'https://oilcanman.mswebmaker.com/ledlamp'
});

export default api;