import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '../theme/colors';
import {moderateScale, screens} from '../theme/assets/screen';
import Images from '../theme/assets/images';
import navigationService from '../navigation/navigation-service';

interface HeaderProps {
  title: string;
}
const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        paddingHorizontal: 10,
        width: screens.screenWidth,
        height: 40,
      }}>
      {title === 'Profile' ? null : (
        <TouchableOpacity style={{}} onPress={() => navigationService.goBack()}>
          <FastImage
            source={Images.app_arrow_left}
            style={{
              width: 30,
              height: 30,
            }}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      )}
      <View
        style={{
          width: screens.screenWidth - moderateScale(40),
          right: 0,
          position: 'absolute',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: moderateScale(16),
            fontWeight: '600',
            color: colors.black,
            marginRight: moderateScale(50),
          }}>
          {title}
        </Text>
      </View>

      <Text style={{opacity: 0}}> Setting </Text>
    </View>
  );
};

export default Header;

// import React from 'react';
// import {View, TouchableOpacity, Text} from 'react-native';
// import FastImage from 'react-native-fast-image';
// import colors from '../theme/colors';
// import {moderateScale, screens} from '../theme/assets/screen';
// import Images from '../theme/assets/images';
// import navigationService from '../navigation/navigation-service';

// interface HeaderProps {
//   title: string;
// }
// const Header: React.FC<HeaderProps> = ({title}) => {
//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         paddingHorizontal: 10,
//         width: screens.screenWidth,
//         height: 40,
//       }}>
//       <TouchableOpacity style={{}} onPress={() => navigationService.goBack()}>
//         <FastImage
//           source={Images.app_arrow_left}
//           style={{
//             width: 30,
//             height: 30,
//           }}
//           resizeMode={'contain'}
//         />
//       </TouchableOpacity>
//       <Text
//         style={{
//           fontSize: moderateScale(16),
//           fontWeight: '600',
//           color: colors.black,
//         }}>
//         {title}
//       </Text>
//       <Text style={{opacity: 0}}> Setting </Text>
//     </View>
//   );
// };

// export default Header;
