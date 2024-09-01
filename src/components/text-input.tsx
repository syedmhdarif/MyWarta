import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  FlatList,
  StyleSheet,
  TextInputProps,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import colors from '../theme/colors';
import {fontSize, moderateScale, screens} from '../theme/assets/screen';
import ShowPassword from '../theme/assets/images/app/pass-show.svg';
import HidePassword from '../theme/assets/images/app/pass-hide.svg';

interface TextInputPlaceHolderProps {
  // onChangeText: (text: string) => void;
  // error?: string | undefined;
  // hideErrorMessage?: boolean;
  // Icon?: React.ElementType;
  label: string;
  isMargin?: boolean;
  // labelStyle?: StyleProp<TextStyle>;
  // style?: StyleProp<ViewStyle>;
  value: string;
  // testID?: string;
  // subtitle?: string;
  // subtitleStyle?: StyleProp<TextStyle>;
}

const TextInputAnimation: React.FC<TextInputPlaceHolderProps> = ({
  label,
  value,
  isMargin,
}) => {
  const [text, setText] = useState<any>('');
  const [secureText, setSecureText] = useState<boolean>(true);
  const IsFocused = useSharedValue(false);

  let marginScale: number = moderateScale(15);

  const emailAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: withTiming(IsFocused.value ? -32 : 0)},
        {translateX: withTiming(IsFocused.value ? 0 : 0)},
      ],
      fontSize: withTiming(IsFocused.value ? fontSize.small : fontSize.normal),

      // backgroundColor: isFocused.value ? colors.white : 'transparent',
    };
  });

  const viewAnimation = useAnimatedStyle(() => {
    return {
      marginTop: withTiming(
        IsFocused.value || IsFocused.value ? marginScale : 0,
        {
          duration: 300,
          easing: Easing.out(Easing.ease),
        },
      ),
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: 'auto',
        },
        isMargin ? viewAnimation : null,
      ]}>
      <Animated.Text style={[styles.placeholder, emailAnimated]}>
        {label}
      </Animated.Text>
      {label === 'Email' ? (
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          value={text}
          onFocus={() => (IsFocused.value = true)}
          onBlur={() => (IsFocused.value = text ? true : false)}
          onChangeText={text => setText(text)}
          autoCapitalize="none"
        />
      ) : (
        <View style={{justifyContent: 'center'}}>
          <TextInput
            style={styles.input}
            secureTextEntry={secureText}
            value={text}
            onFocus={() => (IsFocused.value = true)}
            onBlur={() => (IsFocused.value = text ? true : false)}
            onChangeText={text => setText(text)}></TextInput>
          <TouchableOpacity
            style={{position: 'absolute', right: moderateScale(10)}}
            onPress={() => setSecureText(!secureText)}>
            {secureText ? (
              <ShowPassword style={{height: 25, width: 25}} />
            ) : (
              <HidePassword style={{height: 25, width: 25}} />
            )}
          </TouchableOpacity>
        </View>
      )}
    </Animated.View>
  );
};

export default TextInputAnimation;

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
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.secondary,
    // backgroundColor: 'transparent',
    paddingVertical: moderateScale(12),
    paddingHorizontal: 10,
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
    paddingTop: moderateScale(40),
    paddingBottom: moderateScale(40),
  },
});
