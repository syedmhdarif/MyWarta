import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

// Reference width and height are based on standard mobile screen dimensions
const REFERENCE_WIDTH = 375;
const REFERENCE_HEIGHT = 812;

export const screens = {
  screenHeight: SCREEN_HEIGHT,
  screenWidth: SCREEN_WIDTH,
  IPad: 800,
};
const scales = (size: any) => (SCREEN_WIDTH / REFERENCE_WIDTH) * size;
const verticalScale = (size: any) => (SCREEN_HEIGHT / REFERENCE_HEIGHT) * size;
const moderateScale = (size: any, factor: any = 0.5) =>
  size + (scales(size) - size) * factor;

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size: any) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const fontSize = {
  mini: moderateScale(10),
  small: moderateScale(12),
  normal: moderateScale(14),
  medium: moderateScale(16),
  large: moderateScale(20),
  xlarge: moderateScale(26),
};

export {scale, verticalScale, moderateScale};
