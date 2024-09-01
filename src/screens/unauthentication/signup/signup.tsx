import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  TextInput,
  Alert,
  StyleSheet,
  Button,
} from 'react-native';
import {AuthStackparamList} from '../../../navigation/stack/auth-stack';
import navigationService from '../../../navigation/navigation-service';
import Header from '../../../components/header';
import colors from '../../../theme/colors';
import {moderateScale, screens} from '../../../theme/assets/screen';
import FastImage from 'react-native-fast-image';
import Images from '../../../theme/assets/images';

type Props = NativeStackScreenProps<AuthStackparamList, 'Signup'>;

const SignUpScreen: React.FC<Props> = ({
  route,
  navigation,
}): React.JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
      <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />
      <Header title="Signup" />
      <View style={{justifyContent: 'center', flex: 1}}>
        {/* <Text style={styles.title}>Login</Text> */}
        <FastImage
          style={styles.logo}
          resizeMode={'contain'}
          source={Images.app_logo_primary}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.getStarted}
          onPress={() => navigationService.navigate('App')}>
          <Text style={styles.text}>SIGNUP</Text>
        </TouchableOpacity>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: colors.white,
            marginVertical: 20,
          }}
        />
        {/* <TouchableOpacity
          style={styles.signUp}
          onPress={() => navigationService.navigate('Login')}>
          <Text style={styles.text}>SIGNUP</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
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
    width: screens.screenWidth - 60,
    marginVertical: 5,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.white,
    backgroundColor: colors.white,
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
