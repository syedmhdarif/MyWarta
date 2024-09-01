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
import {
  LoginProps,
  LoginState,
} from '../../screens/unauthentication/login/login.props';
import {DashboardStates} from '../../screens/authentication/dashboard';
import DashboardScreen from '../../screens/authentication/dashboard/dashboard';
import HomeScreen from '../../screens/home';

export type AuthStackparamList = {
  Home: LoginState;
  Signup: SignState;
  Login: LoginState;
};

const Stack = createNativeStackNavigator<AuthStackparamList>();

function AuthStack(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={() => ({headerShown: false})}>
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      <Stack.Screen name="Signup" component={SignUpScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;
