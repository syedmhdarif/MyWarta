import React from 'react';

import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {moderateScale, screens} from '../../../theme/assets/screen';
import FastImage from 'react-native-fast-image';

export type NotesListProps = {
  title: string;
  notes: string;
  date: any;
  author: string;
};

const NotesList: React.FC<NotesListProps> = props => {
  return (
    <View
      style={{
        marginVertical: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 0.4,
        width: screens.screenWidth,
        paddingVertical: 5,
      }}>
      <Text style={{color: 'black', padding: 10}}>{props.title}</Text>
      <Text style={{color: 'black', padding: 10}}>{props.author}</Text>
      <Text style={{color: 'black', padding: 10}}>{props.notes}</Text>
    </View>
  );
};

export default NotesList;
