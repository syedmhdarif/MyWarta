import {PropsWithChildren} from 'react';
import {AppProps} from '../../../constant';

export interface LoginProps extends AppProps {}

export interface LoginState {
  name: string;
  email: any;
  password: any;
  show: boolean;
  //   image: any;
  //   timeDate: any;
}
