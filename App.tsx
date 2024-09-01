/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import navigationService from './src/navigation/navigation-service';
import AuthStack from './src/navigation/stack/auth-stack';
import Appstack, {AppStackparamList} from './src/navigation/stack/bottom-tab';
import DashboardScreen from './src/screens/authentication/dashboard/dashboard';
import ProfileScreen from './src/screens/authentication/profile/profile';
import navigationService from './src/navigation/navigation-service';
import PageStack from './src/navigation/stack/page-stack';
import Article from './src/screens/authentication/article/article';
import {DashboardStates} from './src/screens/authentication/dashboard';
import 'react-native-gesture-handler';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export type RootStackParamList = {
  Auth: undefined;
  App: undefined;
  Page: undefined;
  Article: {item: DashboardStates};
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer ref={navigationService.navigationRef}>
      <RootStack.Navigator
        initialRouteName="Auth"
        screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Auth" component={AuthStack} />
        <RootStack.Screen name="App" component={Appstack} />
        {/* <RootStack.Screen name="Page" component={PageStack} /> */}
        <RootStack.Screen name="Article" component={Article} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
