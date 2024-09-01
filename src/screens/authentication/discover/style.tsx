import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {moderateScale, screens} from '../../../theme/assets/screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    marginVertical: 10,
    width: screens.screenWidth,
    paddingHorizontal: 10,
  },
  headerContainer: {
    paddingHorizontal: 20,
    width: screens.screenWidth,
    flex: 1,
    position: 'absolute',
    bottom: 0,
  },
  headerDiscover: {
    fontSize: moderateScale(38),
    fontWeight: '700',
    color: colors.primary,
  },
  searchContainer: {
    height: 35,
    backgroundColor: colors.gray200,
    borderRadius: 25,
    marginVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  image: {
    height: moderateScale(100),
    width: moderateScale(130),
    borderRadius: 15,
    alignSelf: 'center',
  },
  title: {
    color: colors.secondary,
    paddingVertical: 10,
    fontWeight: '600',
    fontSize: moderateScale(12),
  },
  author: {
    color: colors.secondary,
    fontSize: moderateScale(10),
  },
  date: {
    color: colors.secondary,
    fontSize: moderateScale(10),
    right: 0,
  },
  barStyle: {
    backgroundColor: 'white',
  },
});

export default styles;
