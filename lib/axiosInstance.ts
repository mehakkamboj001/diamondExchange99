import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: typeof window !== 'undefined' ? '/api/v1' : 'http://localhost:3000/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
