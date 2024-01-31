import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const instance = axios.create({
  baseURL: apiUrl, // Set your base API URL here
});

// You can set default headers, interceptors, or any other Axios configuration here

export const get = async (url, params) => {
  try {
    const response = await instance.get(url, { params });
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const post = async (url, data) => {
  try {
    const response = await instance.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Add more methods (put, delete, etc.) if needed

export default instance;
