import React, {useState} from 'react';

import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {moderateScale, screens} from '../../../theme/assets/screen';
import FastImage from 'react-native-fast-image';
import styles from './style';
import colors from '../../../theme/colors';
import navigationService from '../../../navigation/navigation-service';
import {DashboardStates} from '.';
import Images from '../../../theme/assets/images';
import {convertToSimpleFormat} from '../../../constant/date-time-converter';

export type NewsProps = {
  author: string;
  title: string;
  description: string;
  url: any;
  urlToImage: any;
  publishedAt: any;
  content: any;
  navigate: any;
};

const NewsList: React.FC<NewsProps> = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.navigate}>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'space-between',
          display: 'flex',
        }}>
        {props.urlToImage != null ? (
          <FastImage
            resizeMode="stretch"
            style={styles.image}
            source={
              props.urlToImage === 'default'
                ? Images.db_articles
                : {uri: props.urlToImage}
            }
          />
        ) : null}

        <View
          style={{
            flex: 1,
            paddingHorizontal: 10,
            justifyContent: 'space-between',
          }}>
          <Text style={styles.title}>{props.title}</Text>
          <View
            style={{
              flexDirection: 'row',
              maxWidth: 'auto',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.author}>{props.author}</Text>
            <Text style={styles.date}>
              {convertToSimpleFormat(props.publishedAt)}
            </Text>
          </View>

          {/* <Text style={{color: 'black', padding: 10}}>{props.description}</Text> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsList;
