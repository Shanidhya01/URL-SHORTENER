import axios from 'axios';
import { serverUrl } from './Constants';

// Create axios instance with default configuration
const api = axios.create({
  baseURL: serverUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`Making request to: ${config.baseURL}${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let errorMessage = 'An error occurred';
    
    if (error.code === 'ECONNABORTED') {
      errorMessage = 'Request timeout - please try again';
    } else if (error.code === 'ERR_NETWORK') {
      errorMessage = 'Network error - please check your connection and backend URL';
    } else if (error.response) {
      errorMessage = `Server error: ${error.response.status} - ${error.response.statusText}`;
    } else if (error.request) {
      errorMessage = 'No response from server - please check if the backend is running';
    }
    
    console.error('API Error:', errorMessage);
    console.error('Full error:', error);
    
    return Promise.reject(error);
  }
);

export default api;
