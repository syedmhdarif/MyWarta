import {PropsWithChildren} from 'react';
import {AppProps} from '../../../constant';

export interface DashboardProps extends AppProps {}

export interface DashboardStates {
  author: string;
  title: string;
  description: string;
  url: any;
  urlToImage: any;
  publishedAt: any;
  published_at: any;
  image: any;
  content: any;
  source: {id: string; name: string};
  reload: boolean;
  numberReload: number;
}

// export type DashboardStates = PropsWithChildren <{
//     title: string;
//     timeDate: any;
//     description: string;
//     context: any;
//   }>
