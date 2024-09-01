import axios from 'axios';
import Config from 'react-native-config';

// Create an Axios instance
const api = axios.create({
  baseURL: Config.NEWSAPI_BASE_URL, // Replace with your base URL
  timeout: 10000, // Set a timeout limit for requests
});

// Optionally add default headers (can be overridden per request)
api.defaults.headers.common['Content-Type'] = 'application/json';

export default api;

export const fetchData = async (link: string, token: any) => {
  try {
    const response = await api.get(link, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
    //   setData(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const fetchPublicData = async (link: string) => {
  try {
    const response = await api.get(link, {
      headers: {
        Authorization: undefined,
      },
    });

    return response.data;
    //   setData(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
