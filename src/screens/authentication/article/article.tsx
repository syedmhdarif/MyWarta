import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {DashboardStates} from '../dashboard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PageParamList} from '../../../navigation/stack/page-stack';
import {NewsProps} from '../dashboard/newsList';
import {RootStackParamList} from '../../../../App';
import styles from './style';
import {fontSize, moderateScale, screens} from '../../../theme/assets/screen';
import colors from '../../../theme/colors';
import FastImage from 'react-native-fast-image';
import navigationService from '../../../navigation/navigation-service';
import Images from '../../../theme/assets/images';
import Header from '../../../components/header';
import {convertToSimpleFormat} from '../../../constant/date-time-converter';

type Props = NativeStackScreenProps<RootStackParamList, 'Article'>;

const Article: React.FC<Props> = ({route, navigation}): React.JSX.Element => {
  const [item, setItem] = useState<DashboardStates>();
  useEffect(() => {
    const item = route?.params?.item;
    setItem(item);
    console.warn('route value: ', item);
  }, []);
  //   const {title} = route.params;

  const url = (link: any = item) => {
    if (item?.urlToImage && item.urlToImage !== null) {
      link = item.urlToImage;
    } else if (item?.image && item.image !== null) {
      link = item.image;
    } else {
      link = 'default';
    }

    return link;
  };

  let description: any = item?.description;
  const separators = /[.&#]/;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />
      <Header title="Article" />

      <ScrollView style={{paddingHorizontal: 20}}>
        <View>
          <Text
            onPress={() => Linking.openURL(item?.url)}
            lineBreakMode="head"
            style={{
              fontSize: fontSize.large,
              marginVertical: 5,
              color: colors.secondary,
              fontWeight: '700',
            }}>
            {item?.title}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.source}>
              {item?.publishedAt
                ? convertToSimpleFormat(item?.publishedAt)
                : convertToSimpleFormat(item?.published_at)}{' '}
              - {item?.source.id ? item?.source.id : item?.source}
            </Text>
          </View>
        </View>

        <FastImage
          resizeMode="stretch"
          style={styles.image}
          source={url() === 'default' ? Images.db_articles : {uri: url()}}
        />

        <View
          style={{
            marginHorizontal: 0,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}>
          <Text style={styles.content}>
            {description
              ?.split(separators)
              .filter((sentence: string) => sentence.trim() !== '')
              .map((sentence: string) => sentence.trim() + '\n\n')}
          </Text>
          <Text style={styles.content}>{item?.content}</Text>
          <Text
            onPress={() => Linking.openURL(item?.url)}
            style={styles.LinkURL}>
            Read more
          </Text>
        </View>
        <View style={{height: moderateScale(40)}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Article;
