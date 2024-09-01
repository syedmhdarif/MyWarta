import {PropsWithChildren} from 'react';
import {AppProps} from '../../../constant';

export interface ProfileProps extends AppProps {}

export interface ProfileState {
  name: string;
  email: any;
  //   image: any;
  //   timeDate: any;
}

// export type DashboardStates = PropsWithChildren <{
//     title: string;
//     timeDate: any;
//     description: string;
//     context: any;
//   }>
