import axios from "axios";

// const BASE_URL = `https://makeen.ae/APIs/public/api/`;
const BASE_URL = `https://lovettonazareth.com/APIs/public/api/`;

export const axiosGet = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}${url}`);
    if (response?.status === 200 && response?.data) {
      return response?.data;
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const axiosPost = async (url, payload) => {
  try {
    const response = await axios.post(`${BASE_URL}${url}`, payload);
    if (response?.data) {
      return response.data;
    }
    return response;
  } catch (error) {
    throw error;
  }
};
