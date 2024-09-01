import React, {useEffect, useRef, useState} from 'react';
import 'react-native-gesture-handler';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
  Alert,
  TextInput,
  SafeAreaView,
  Button,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Images from '../theme/assets/images';
import colors from '../theme/colors';
import {fontSize, moderateScale, screens} from '../theme/assets/screen';
import navigationService from '../navigation/navigation-service';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackparamList} from '../navigation/stack/auth-stack';
import TextInputPlaceholder from '../components/textInput';

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import LogoPlaceHolder from '../components/logo-company';
import TextInputAnimation from '../components/text-input';

type Props = NativeStackScreenProps<AuthStackparamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({
  route,
  navigation,
}): React.JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<any>('');

  const authPlaceholder = useSharedValue(false);
  const logoIsFocus = useSharedValue(false);

  let logoScale: number = moderateScale(220);
  let logoHideScale: number = moderateScale(-360);

  const authAnimation = useAnimatedStyle(() => {
    return {
      bottom: withTiming(
        authPlaceholder.value || authPlaceholder.value ? 0 : logoHideScale,
        {
          duration: 400,
          easing: Easing.out(Easing.ease),
        },
      ),
    };
  });

  const logoAnimation = useAnimatedStyle(() => {
    return {
      marginBottom: withTiming(
        logoIsFocus.value || logoIsFocus.value ? logoScale : 0,
        {
          duration: 400,
          easing: Easing.out(Easing.ease),
        },
      ),
    };
  });

  const bottomAnimation = useAnimatedStyle(() => {
    return {
      bottom: withTiming(
        authPlaceholder.value || authPlaceholder.value ? -120 : 50,
        {
          duration: 400,
          easing: Easing.out(Easing.ease),
        },
      ),
    };
  });

  // const width = useSharedValue(100);

  // const handlePress = () => {
  //   width.value = withSpring(width.value + 50);
  // };

  useEffect(() => {
    // setShow(false);

    if (route?.params?.show) {
      const {show} = route?.params;
      console.warn('show : ', show);
      setShow(show);
    }
  }, [show, setShow]);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    // Replace with your API call or authentication logic
    if (email === 'test@example.com' && password === 'password') {
      Alert.alert('Success', 'Logged in successfully!');
    } else {
      Alert.alert('Error', 'Invalid email or password.');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* {show ? ( */}
      <Animated.View style={[{marginBottom: 0}, logoAnimation]}>
        <TouchableOpacity
          disabled={show === true ? false : true}
          onPress={() => {
            setShow(false);
            authPlaceholder.value = false;
            logoIsFocus.value = false;
          }}>
          <FastImage
            style={[styles.logo]}
            resizeMode={'contain'}
            source={Images.app_logo_primary}
          />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.authPlaceholder, authAnimation]}>
        {/* <Animated.View
            style={{
              width: width,
              height: 100,
              backgroundColor: 'violet',
            }}
          />
          <Button onPress={() => handlePress()} title="Click me" /> */}

        {/* <Text style={styles.title}>Login</Text> */}
        <View
          style={{
            paddingHorizontal: 40,
            justifyContent: 'space-between',
            paddingVertical: screens.screenHeight * 0.07,
            // backgroundColor: 'red',
          }}>
          <Animated.View style={{paddingBottom: moderateScale(20)}}>
            <TextInputAnimation
              label={'Email'}
              value={'Email'}
              isMargin={false}
            />

            <TextInputAnimation
              label={'Password'}
              value={'Password'}
              isMargin={true}
            />
          </Animated.View>
          <TouchableOpacity
            style={loginStyle.getStarted}
            onPress={() => navigationService.navigate('App')}>
            <Animated.Text style={loginStyle.text}>LOGIN</Animated.Text>
          </TouchableOpacity>
          <View style={styles.line}>
            <Text style={styles.orText}>OR</Text>
          </View>
          <LogoPlaceHolder
            Google={undefined}
            Apple={undefined}
            Facebook={undefined}
          />
          <View style={{height: screens.screenHeight * 0.02}} />
        </View>
      </Animated.View>
      {/* ) : ( */}
      {show === false ? (
        <Animated.View style={[styles.bottomContainer, bottomAnimation]}>
          <TouchableOpacity
            style={styles.getStarted}
            onPress={() => {
              setShow(true);
              authPlaceholder.value = true;
              logoIsFocus.value = true;
            }}>
            <Text style={styles.text}>GET STARTED</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signup}
            onPress={() => {
              navigationService.navigate('Signup');
            }}>
            <Text style={[styles.text, {color: 'white'}]}>SIGNUP</Text>
          </TouchableOpacity>

          <Text style={styles.term}>
            By using My Warta, you agree to our{' '}
            <Text onPress={() => {}}>Terms & Conditions</Text>
          </Text>
        </Animated.View>
      ) : null}
      {/* )} */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: moderateScale(300),
    height: moderateScale(100),
    marginBottom: moderateScale(80),
  },
  bottomContainer: {
    display: 'flex',
    position: 'absolute',
    width: screens.screenWidth - 40,
    // bottom: moderateScale(50),
    paddingVertical: moderateScale(10),
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  getStarted: {
    marginVertical: 5,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.white,
    backgroundColor: colors.white,
    paddingVertical: moderateScale(12),
  },
  signup: {
    marginVertical: 5,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.white,
    paddingVertical: moderateScale(12),
  },
  text: {
    color: colors.secondary,
    fontSize: moderateScale(13),
    fontWeight: '600',
  },
  term: {
    color: 'white',
    fontSize: fontSize.small,
    alignSelf: 'center',
    marginVertical: moderateScale(10),
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    padding: 10,
  },
  placeholder: {
    position: 'absolute',
    left: 10,
    top: 20,
    color: 'gray',
  },
  authPlaceholder: {
    flex: 1,
    position: 'absolute',
    // bottom: moderateScale(-280),
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginTop: 0,
    width: screens.screenWidth,
    borderTopRightRadius: moderateScale(25),
    borderTopLeftRadius: moderateScale(25),
    // paddingTop: moderateScale(40),
    // paddingBottom: moderateScale(40),
    // paddingVertical: moderateScale(60),
  },
  line: {
    borderBottomWidth: 0.5,
    borderColor: colors.secondary,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orText: {
    position: 'absolute',
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    color: colors.secondary,
  },
});

const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.secondary,
    // backgroundColor: colors.lightGray,
    paddingVertical: moderateScale(12),
    paddingHorizontal: 10,
  },
  logo: {
    width: moderateScale(300),
    height: moderateScale(100),
    marginBottom: moderateScale(80),
  },
  getStarted: {
    marginVertical: 5,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.yellow,
    backgroundColor: colors.yellow,
    paddingVertical: moderateScale(12),
  },
  signUp: {
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: moderateScale(12),
  },
  text: {
    color: colors.white,
    fontSize: moderateScale(13),
    fontWeight: '600',
  },
});
