import {StyleSheet} from 'react-native';
import {moderateScale, screens} from '../../../theme/assets/screen';
import colors from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  image: {
    height: moderateScale(280),
    width: screens.screenWidth - 40,
    alignSelf: 'center',
    marginVertical: 10,
  },
  source: {
    fontSize: moderateScale(14),
    color: colors.secondary,
  },
  content: {
    fontSize: moderateScale(14),
    color: colors.black,
  },
  LinkURL: {
    fontSize: moderateScale(14),
    color: colors.primary,
    paddingBottom: 20,
  },
});

export default styles;
