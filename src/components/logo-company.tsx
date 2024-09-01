import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import Images from '../theme/assets/images';
import Google from '../theme/assets/images/bottom-tab/logo-google.svg';
import Apple from '../theme/assets/images/bottom-tab/logo-apple.svg';
import Facebook from '../theme/assets/images/bottom-tab/logo-facebook.svg';

interface LogoPlaceholderProps {
  Google: undefined;
  Apple: undefined;
  Facebook: undefined;
}

const LogoPlaceHolder: React.FC<LogoPlaceholderProps> = ({}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 90,
        marginVertical: 10,
      }}>
      <TouchableOpacity>
        <Google style={{width: 25, height: 25}} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Apple style={{width: 25, height: 25}} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Facebook style={{width: 25, height: 25}} />
      </TouchableOpacity>
    </View>
  );
};

export default LogoPlaceHolder;
