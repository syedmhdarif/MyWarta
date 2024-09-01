import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {moderateScale, screens} from '../theme/assets/screen';
import colors from '../theme/colors';

interface HorizontalProps {
  name: any[];
  onpress: (name: string) => void;
  selectedItem: string;
}

const HorizontalScroll: React.FC<HorizontalProps> = ({
  name,
  onpress,
  selectedItem,
}) => {
  return (
    <ScrollView
      style={{
        marginVertical: 10,
        marginHorizontal: 10,
      }}
      horizontal={true}>
      {name.map((name, index) => (
        <TouchableOpacity
          style={[
            style.container,
            selectedItem === name.name && style.selectedContainer,
          ]}
          key={name[index]}
          onPress={() => onpress(name.name)}>
          <Text style={{fontSize: moderateScale(11)}}>{name.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default HorizontalScroll;

const style = StyleSheet.create({
  container: {
    // width: moderateScale(100),
    height: moderateScale(30),
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedContainer: {
    backgroundColor: colors.babyBlue,
    borderColor: colors.primary,
  },
});
