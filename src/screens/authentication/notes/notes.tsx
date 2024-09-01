import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';

import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {AppStackparamList} from '../../../navigation/stack/bottom-tab';
import {NotesListProps} from './notesList';

// Define the types for the component's props and state
type Props = NativeStackScreenProps<AppStackparamList, 'Notes'>;

export interface NoteState {
  title: string;
  notes: string;
  date: any;
  author: string;
}

export default class NoteScreen extends React.Component<Props, NoteState> {
  componentDidMount(): void {}

  render(): React.ReactNode {
    return (
      <View>
        <FlatList
          data={null}
          renderItem={null}
          keyExtractor={(item: NotesListProps) => `${item.date}`}
        />
      </View>
    );
  }
}
