import axios from "axios";

export const key = "3aff50e785634d6c30076088d6a2713f989b21eb";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization': `Bearer ${key}`
    }
});

export default api;