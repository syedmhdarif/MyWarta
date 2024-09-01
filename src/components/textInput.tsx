import React, {useEffect, useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput as Input,
  TextStyle,
  View,
  ViewStyle,
  Animated,
  Platform,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
// import {Colours, Fonts, Sizing} from 'theme';
import colors from '../theme/colors';
import {fontSize, moderateScale, screens} from '../theme/assets/screen';

interface TextInputAnimatedProps extends TextInputProps {
  animatedIsFocused: Animated.Value;
  onChangeText: (text: string) => void;
  error?: string | undefined;
  hideErrorMessage?: boolean;
  Icon?: React.ElementType;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  value: string;
  testID?: string;
  subtitle?: string;
  subtitleStyle?: StyleProp<TextStyle>;
}

const TextInputPlaceholder: React.FC<TextInputAnimatedProps> = (
  {
    animatedIsFocused,
    error,
    Icon,
    label,
    labelStyle,
    onChangeText,
    style,
    value,
    testID,
    onBlur,
    subtitle,
    subtitleStyle,
    hideErrorMessage = false,
    ...inputProps
  },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value, animatedIsFocused]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onBlur?.(e);
    setIsFocused(false);
  };

  const labelStyles = [
    {
      ...styles.label,
      top: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 0],
      }),
      fontSize: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 12],
      }),
      color: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.darkGray, colors.lightGray],
      }),
      marginTop: value || isFocused ? fontSize.large : 0,
    },
    labelStyle,
  ];

  const inputContainerStyles = [
    error ? styles.errorInput : {},
    isFocused ? styles.focusedInput : {},
  ];

  return (
    <>
      <View style={[styles.container, style, inputContainerStyles]}>
        {label && <Animated.Text style={labelStyles}>{label}</Animated.Text>}
        <View style={styles.inputContainer}>
          <Input
            ref={ref}
            autoCapitalize="none"
            autoCorrect={false}
            allowFontScaling={false}
            value={value}
            onFocus={handleFocus}
            onBlur={e => handleBlur(e)}
            onChangeText={onChangeText}
            style={styles.input}
            selectionColor={colors.lightGray}
            underlineColorAndroid="transparent"
            spellCheck={false}
            testID={testID}
            {...inputProps}
          />
          {Icon && <Icon />}
        </View>
      </View>
      {error && !hideErrorMessage && (
        <Text style={styles.errorMessage} testID={`${testID}-error`}>
          {error}
        </Text>
      )}
      {subtitle && !error && (
        <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
      )}
    </>
  );
};

// } (
//   (
//     {
//       animatedIsFocused,
//       error,
//       Icon,
//       label,
//       labelStyle,
//       onChangeText,
//       style,
//       value,
//       testID,
//       onBlur,
//       subtitle,
//       subtitleStyle,
//       hideErrorMessage = false,
//       ...inputProps
//     },
//     ref,
//   ) => {

//   },
// );
export default TextInputPlaceholder;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderColor: colors.secondary,
    borderWidth: 2,
    borderRadius: 4,
    paddingTop: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: moderateScale(20),
    marginRight: moderateScale(20),
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: colors.secondary,
    padding: 0,
  },
  focusedInput: {
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  errorInput: {
    borderWidth: 2,
    borderColor: colors.red,
  },
  errorMessage: {
    // ...Fonts.REG_BODY_3,
    fontSize: 14,
    color: colors.red,
    marginTop: moderateScale(10),
    fontWeight: Platform.OS === 'ios' ? '400' : 'bold',
  },
  subtitle: {
    // ...Fonts.REG_BODY_3,
    fontSize: 14,
    color: colors.lightGray,
    marginTop: moderateScale(10),
  },
  label: {
    position: 'absolute',
    left: 0,
    // ...Fonts.REG_BODY_3,
    color: colors.white,
    marginLeft: moderateScale(10),
  },
});
