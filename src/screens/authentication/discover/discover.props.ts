import {PropsWithChildren} from 'react';
import {AppProps} from '../../../constant';

export interface DiscoveryProps extends AppProps {}

export interface DiscoveryState {
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
