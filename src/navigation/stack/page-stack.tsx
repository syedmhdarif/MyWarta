import React from 'react';
import type {PropsWithChildren} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
// import navigationService from '../navigation-service';
import LoginScreen from '../../screens/unauthentication/login/login';
import SignUpScreen from '../../screens/unauthentication/signup/signup';
import {SignState} from '../../screens/unauthentication/signup/signup.porps';
import {LoginProps} from '../../screens/unauthentication/login/login.props';
import {DashboardStates} from '../../screens/authentication/dashboard';
import DashboardScreen from '../../screens/authentication/dashboard/dashboard';
import Article from '../../screens/authentication/article/article';

export type PageParamList = {
  Article: {item: DashboardStates};
};

const Stack = createNativeStackNavigator<PageParamList>();

function PageStack(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Stack.Navigator initialRouteName="Article">
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
}

export default PageStack;
