import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {DashboardStates} from '../../screens/authentication/dashboard';
import {ProfileState} from '../../screens/authentication/profile';
import {StyleSheet, View, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
// import navigationService from '../navigation-service';
import DashboardScreen from '../../screens/authentication/dashboard/dashboard';
import ProfileScreen from '../../screens/authentication/profile/profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FastImage from 'react-native-fast-image';
import Images from '../../theme/assets/images';
import NoteScreen, {NoteState} from '../../screens/authentication/notes/notes';
import Article from '../../screens/authentication/article/article';
import colors from '../../theme/colors';
import {moderateScale} from '../../theme/assets/screen';
import Newspaper from '../../theme/assets/images/bottom-tab/newspaper.svg';
import NewspaperFocus from '../../theme/assets/images/bottom-tab/newspaper-focused.svg';
import NotesIcon from '../../theme/assets/images/bottom-tab/news.svg';
import NotesIconFocus from '../../theme/assets/images/bottom-tab/news-focused.svg';
import Person from '../../theme/assets/images/bottom-tab/person.svg';
import PersonFocus from '../../theme/assets/images/bottom-tab/person-focused.svg';
import {AuthStackparamList} from './auth-stack';
import navigationService from '../navigation-service';
import {DiscoveryState} from '../../screens/authentication/discover/discover.props';
import DiscoveryScreen from '../../screens/authentication/discover/discover';

export type AppStackparamList = {
  Dashboard: DashboardStates;
  Profile: {item: ProfileState};
  Notes: NoteState;
  Discover: DiscoveryState;
  Article: DashboardStates;
  Auth: AuthStackparamList;
  // Details: {itemId: number; itemName: string};
  // SectionProps: SectionProps;
};

const BottomTab = createBottomTabNavigator<AppStackparamList>();

function Appstack(): React.JSX.Element {
  const [numberReload, setNumberReload] = useState(0);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Dashboard') {
            if (focused) {
              return (
                <FastImage
                  resizeMode={'stretch'}
                  source={Images.warta_focus}
                  style={{width: moderateScale(45), height: moderateScale(20)}}
                />
              );
            } else {
              return (
                <FastImage
                  resizeMode={'stretch'}
                  source={Images.warta}
                  style={{width: moderateScale(45), height: moderateScale(20)}}
                />
              );
            }
          } else if (route.name === 'Notes') {
            if (focused) {
              return (
                <NotesIconFocus
                  style={{width: moderateScale(40), height: moderateScale(20)}}
                />
              );
            } else {
              return (
                <NotesIcon
                  style={{width: moderateScale(40), height: moderateScale(20)}}
                />
              );
            }
          } else if (route.name === 'Profile') {
            if (focused) {
              return (
                <PersonFocus
                  style={{width: moderateScale(40), height: moderateScale(20)}}
                />
              );
            } else {
              return (
                <Person
                  style={{width: moderateScale(40), height: moderateScale(20)}}
                />
              );
            }
          } else if (route.name === 'Discover') {
            if (focused) {
              return (
                <NewspaperFocus
                  style={{width: moderateScale(40), height: moderateScale(20)}}
                />
              );
            } else {
              return (
                <Newspaper
                  style={{width: moderateScale(40), height: moderateScale(20)}}
                />
              );
            }
          }
        },
        headerShown: false,
        tabBarLabelStyle:
          route.name === 'Dashboard'
            ? {
                fontSize: moderateScale(0.1),
                fontWeight: '100',
                opacity: 0,
              }
            : {
                fontSize: moderateScale(10),
                fontWeight: '600',
              },
        // tabBarStyle: styles.tabBarStyles,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.lightGray,
        // tabBarActiveBackgroundColor: colors.secondary,
        tabBarItemStyle: {
          borderRadius: 10, // Round the active tab
          marginVertical: 2,
          marginHorizontal: 20, // Add some margin to make the active tab look elevated
        },
      })}>
      <BottomTab.Screen
        name="Dashboard"
        component={DashboardScreen}
        // listeners={({navigation}) => ({
        //   tabPress: e => {
        //     // Prevent default action
        //     e.preventDefault();

        //     // Make it reload the current page
        //     navigationService.navigate('Dashboard', {
        //       // This will reload the screen and can trigger state change
        //       reload: true,
        //       numberReload: numberReload,
        //     });
        //     setNumberReload(numberReload + 1);
        //   },
        // })}
      />
      <BottomTab.Screen name="Discover" component={DiscoveryScreen} />
      <BottomTab.Screen name="Notes" component={NoteScreen} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
}

export default Appstack;

const styles = StyleSheet.create({
  tabBarStyles: {
    backgroundColor: colors.primary,
  },
});
