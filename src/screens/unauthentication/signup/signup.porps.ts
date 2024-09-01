import {PropsWithChildren} from 'react';
import {AppProps} from '../../../constant';

export interface SignProps extends AppProps {}

export interface SignState {
  name: string;
  email: any;
  password: any;
  //   image: any;
  //   timeDate: any;
}
