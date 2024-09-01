import Config from 'react-native-config';

// const API_KEY = '1637f4c6c41d4d9caffd8f2a9691d652';
// const NEWSAPI_BASE_URL = 'https://newsapi.org/v2/';
// const MEDIASTACK_KEY = 'c76302461ee5206c6e25ac83b6b6582b';
// const MEDIASTACK_BASE_URL = 'https://api.mediastack.com/v1/news';

const api = {
  Entertainment: `${Config.MEDIASTACK_BASE_URL}?access_key=${Config.MEDIASTACK_KEY}&keywords=blackpink`,
  Business: `${Config.MEDIASTACK_BASE_URL}?access_key=${Config.MEDIASTACK_KEY}&categories=business`,
  Tech: `${Config.MEDIASTACK_BASE_URL}?access_key=${Config.MEDIASTACK_KEY}&categories=technology`,
  Stock: `${Config.MEDIASTACK_BASE_URL}?access_key=${Config.MEDIASTACK_KEY}&keywords=stock&country=my`,
  // Malaysia: `${Config.NEWSAPI_BASE_URL}top-headlines?country=my&apiKey=${Config.API_KEY}`,
  Sports: `${Config.MEDIASTACK_BASE_URL}?access_key=${Config.MEDIASTACK_KEY}&country=my&keywords=badminton`,
  Malaysia: `${Config.MEDIASTACK_BASE_URL}?access_key=${Config.MEDIASTACK_KEY}&country=my`,
  Media: `${Config.MEDIASTACK_BASE_URL}?access_key=${Config.MEDIASTACK_KEY}&categories=entertainment`,
  Default: `https://api.mediastack.com/v1/news?access_key=${Config.MEDIASTACK_KEY}&categories=health,-sports`,
};

export default api;
