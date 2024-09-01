import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';
import {RootStackParamList} from '../../../../App';
// import navigationService from '../../../navigation/navigation-service';
import {ProfileState} from '.';
import {AppStackparamList} from '../../../navigation/stack/bottom-tab';
import navigationService from '../../../navigation/navigation-service';
import colors from '../../../theme/colors';
import {fontSize, moderateScale, screens} from '../../../theme/assets/screen';
import Header from '../../../components/header';
import FastImage from 'react-native-fast-image';
import Images from '../../../theme/assets/images';
import {launchImageLibrary} from 'react-native-image-picker';
import ChevronRight from '../../../theme/assets/images/app/chevron_right.svg';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export type profileProps = {
  title: string;
  id: number;
  description: string;
  name: string;
};

type Props = NativeStackScreenProps<AppStackparamList, 'Profile'>;

const ProfileScreen: React.FC<Props> = ({
  route,
  navigation,
}): React.JSX.Element => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [profile, setProfile] = useState<profileProps[]>([
    {title: 'Username', id: 1, description: '', name: '@username'},
    {title: 'Name', id: 2, description: '', name: 'Syed Arif'},
    {title: 'Email', id: 3, description: '', name: 'syed@gmail.com'},
    {title: 'Phone', id: 4, description: '', name: '+6014-5297072'},
  ]);
  const [show, setShow] = useState<boolean>(false);

  const isFocused = useSharedValue(false);

  let moveScale: number = (screens.screenWidth * 0.7) / 2 - 10;

  const settingAnimated = useAnimatedStyle(() => {
    return {
      left: withTiming(isFocused.value || isFocused.value ? moveScale : 0, {
        duration: 300,
        easing: Easing.out(Easing.ease),
      }),
    };
  });

  const selectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 300,
        quality: 0.7,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const selectedImageUri = response.assets[0].uri;
          setProfilePic(selectedImageUri || null);
        }
      },
    );
  };
  useEffect(() => {
    const item = route?.params?.item;

    if (item && item != undefined) {
      setName(item.name);
      setEmail(item.email);
    } else null;
  }, [setName, setEmail]);

  const renderItem = ({item}: any) => {
    return (
      <View
        style={{
          marginVertical: 5,
          // backgroundColor: 'red',
          width: screens.screenWidth - moderateScale(40),
        }}>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                fontSize: fontSize.normal,
                color: colors.darkGray,
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                fontSize: fontSize.normal,
                color: colors.secondary,
              }}>
              {item.name}
            </Text>
          </View>

          <ChevronRight />
        </TouchableOpacity>

        <View
          style={{
            borderBottomWidth: 1,
            borderColor: colors.darkGray,
            opacity: 0.2,
            width: screens.screenWidth,
          }}
        />
      </View>
    );
  };

  function onRefresh(): any {
    try {
      setProfile(profile);
    } catch (e) {
      console.log('Fetch profile Error', e);
    }
  }

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', backgroundColor: colors.white}}>
      <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />
      <Header title="Profile" />
      <View
        style={{
          flex: 1,
          width: screens.screenWidth - moderateScale(40),
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 0.2,
            width: screens.screenWidth - moderateScale(40),
            alignItems: 'center',
            // justifyContent: 'center',
            marginTop: moderateScale(20),
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: moderateScale(95),
              height: moderateScale(95),
              backgroundColor: colors.white,
              borderWidth: 1,
              borderColor: colors.primary,
              borderRadius: 55,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={selectImage}>
              <Image
                source={
                  profilePic ? {uri: profilePic} : Images.app_logo_warta // Placeholder image
                }
                style={{
                  width: moderateScale(80),
                  height: moderateScale(80),
                  backgroundColor: colors.primary,
                  borderRadius: 45,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              height: moderateScale(70),
              marginHorizontal: 20,
            }}>
            <View>
              <Text
                style={{
                  fontSize: fontSize.medium,
                  fontWeight: '600',
                  color: colors.secondary,
                }}>
                Syed Mohamad Arif
              </Text>
              <Text
                style={{
                  fontSize: fontSize.small,
                  fontWeight: '400',
                  color: colors.secondary,
                }}>
                @username
              </Text>
            </View>

            <TouchableOpacity
              onPress={selectImage}
              style={{
                paddingHorizontal: 5,
                paddingVertical: 3,
                borderWidth: 1,
                borderColor: colors.primary,
                backgroundColor: colors.white,
                borderRadius: 25,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: fontSize.small,
                  fontWeight: '400',
                  paddingVertical: 2,
                  color: colors.secondary,
                }}>
                Change Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flex: 0.8,
            marginTop: 20,
            alignItems: 'center',
          }}>
          <View
            style={{
              width: screens.screenWidth * 0.7,
              height: moderateScale(35),
              backgroundColor: colors.gray,
              borderRadius: 25,
              // alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Animated.View
              style={[
                {
                  width: (screens.screenWidth * 0.7) / 2,
                  height: moderateScale(25),
                  backgroundColor: colors.white,
                  borderRadius: 25,
                  marginHorizontal: 5,
                  borderColor: colors.primary,
                  borderWidth: 1,
                  // left: 0,
                },
                settingAnimated,
              ]}
            />
            <View
              style={{
                flexDirection: 'row',
                width: screens.screenWidth * 0.7,
                justifyContent: 'space-between',
                paddingHorizontal: 40,
                position: 'absolute',
              }}>
              <TouchableOpacity
                onPress={() => {
                  isFocused.value = false;
                  setShow(false);
                }}>
                <Text
                  style={{
                    padding: 5,
                    // backgroundColor: 'red',
                    paddingHorizontal: 10,
                    color: colors.secondary,
                  }}>
                  Profile
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  isFocused.value = true;
                  setShow(true);
                }}>
                <Text
                  style={{
                    padding: 5,
                    // backgroundColor: 'yellow',
                    paddingHorizontal: 10,
                    color: colors.secondary,
                  }}>
                  Setting
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {show ? (
            <TouchableOpacity
              style={{
                height: 40,
                // width: 200,
                position: 'absolute',
                bottom: 10,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                marginVertical: 10,
              }}
              onPress={() => {
                navigationService.navigate('Home', {show: false});
              }}>
              <Text
                style={{
                  color: colors.red,
                  fontWeight: '400',
                  fontSize: fontSize.medium,
                }}>
                Log out
              </Text>
            </TouchableOpacity>
          ) : (
            <FlatList
              style={{marginTop: 20}}
              data={profile}
              refreshing={refreshing}
              onRefresh={onRefresh}
              renderItem={renderItem}
              keyExtractor={(item: profileProps) => `${item.id}`}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

// function ProfileScreen(): React.JSX.Element {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Profile Screen</Text>
//       <TouchableOpacity
//         style={{
//           height: 40,
//           width: 200,
//           borderColor: 'black',
//           borderWidth: 2,
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//         onPress={() => {
//           navigationService.navigate('Dashboard');
//         }}>
//         <Text>Back</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

export default ProfileScreen;
