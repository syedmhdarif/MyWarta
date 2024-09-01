import Config from 'react-native-config';

export interface Category {
  name: string;
  link: any;
}
export const CategoryList: Category[] = [
  {
    name: 'Entertainment',
    link: `${Config.NEWSAPI_BASE_URL}everything?q=tesla&sortBy=publishedAt&apiKey=${Config.API_KEY}`,
  },
  {
    name: 'Business',
    link: `${Config.NEWSAPI_BASE_URL}top-headlines?country=my&category=business&apiKey=${Config.API_KEY}`,
  },
  {
    name: 'Tech',
    link: `${Config.NEWSAPI_BASE_URL}top-headlines?sources=techcrunch&apiKey=${Config.API_KEY}`,
  },
  {
    name: 'Stock',
    link: `${Config.NEWSAPI_BASE_URL}everything?domains=wsj.com&apiKey=${Config.API_KEY}`,
  },
  {
    name: 'Sports',
    link: `${Config.NEWSAPI_BASE_URL}top-headlines?country=my&apiKey=${Config.API_KEY}`,
  },
  {
    name: 'Malaysia',
    link: `${Config.NEWSAPI_BASE_URL}top-headlines?country=my&apiKey=${Config.API_KEY}`,
  },
  {
    name: 'Media',
    link: `${Config.MEDIASTACK_BASE_URL}?access_key=${Config.MEDIASTACK_KEY}&country=my`,
  },
];

// export default CategoryList;
