import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
  StatusBar,
  StatusBarStyle,
  RefreshControl,
} from 'react-native';
// import navigationService from '../../../navigation/navigation-service';
import {RootStackParamList} from '../../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProfileState} from '../profile';
import {AppStackparamList} from '../../../navigation/stack/bottom-tab';
import navigationService from '../../../navigation/navigation-service';
import {fetchPublicData} from '../../../https/http';
import NewsList, {NewsProps} from './newsList';
import {moderateScale, screens} from '../../../theme/assets/screen';
import HorizontalScroll from '../../../components/horizontal-scroll';
import api from '../../../https/api';
import {DashboardStates} from '.';
import colors from '../../../theme/colors';
import styles from './style';
import {epochTimeStamp} from '../../../constant/date-time-converter';
import {CategoryList, Category} from '../../../constant/category-list';
import Images from '../../../theme/assets/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  retrieveAsyncStorage,
  storeAsyncStorage,
} from '../../../constant/async-store';
import FastImage from 'react-native-fast-image';

type Props = NativeStackScreenProps<AppStackparamList, 'Dashboard'>;

const DashboardScreen: React.FC<Props> = ({
  route,
  navigation,
}): React.JSX.Element => {
  // let item: DashboardStates = {
  //   title: 'syed',
  //   author: 'syed@gmail.com',
  //   description: '',
  //   url: undefined,
  //   urlToImage: undefined,
  //   publishedAt: undefined,
  //   content: undefined,
  // };
  const STYLES = ['default', 'dark-content', 'light-content'] as const;
  const TRANSITIONS = ['fade', 'slide', 'none'] as const;

  const [news, setNews] = useState([]);
  const [name, setName] = useState<Category[]>(CategoryList);
  const [type, setType] = useState<string>('Entertainment');
  const [load, setLoad] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);
  const [linkSelected, setLinkSelected] = useState<string>(
    CategoryList[0].link,
  );
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0],
  );
  const [time, setTime] = useState<any>(epochTimeStamp(Date.now()));
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    setLoad(true);
    // CategoryList.map(list => {
    //   setName([...name, list.name]);
    // })

    let linkSelected: string = api.Entertainment;

    const intervalId = setInterval(() => {
      setTime(epochTimeStamp(Date.now()));
    }, 1000);

    if (type === 'Entertainment') {
      linkSelected = api.Entertainment;
      setLinkSelected(api.Entertainment);
    } else if (type === 'Business') {
      linkSelected = api.Business;
      setLinkSelected(api.Business);
    } else if (type === 'Stock') {
      linkSelected = api.Stock;
      setLinkSelected(api.Stock);
    } else if (type === 'Malaysia') {
      linkSelected = api.Malaysia;
      setLinkSelected(api.Malaysia);
    } else if (type === 'Media') {
      linkSelected = api.Media;
      setLinkSelected(api.Media);
    } else if (type === 'Sports') {
      linkSelected = api.Sports;
      setLinkSelected(api.Sports);
    } else if (type === 'Tech') {
      linkSelected = api.Tech;
      setLinkSelected(api.Tech);
    } else {
      linkSelected = api.Default;
      setLinkSelected(api.Default);
    }

    // let tableName = type + linkSelected;
    // AsyncStorage.removeItem(`${tableName}`);

    if (route?.params?.reload && route?.params?.numberReload === counter) {
      // Reload logic
      setNews([]);
      setLoad(true);

      setTimeout(async () => {
        await fetchItem(linkSelected);
        setCounter(counter + 1);
        console.warn(
          'reload activate number :',
          route?.params?.numberReload,
          ' / counter : ',
          counter,
        );
      }, 300);
    } else {
      const fetchData = async (link: any = linkSelected) => {
        let data: any;
        // setTimeout(async () => {
        data = await retrieveAsyncStorage(type, linkSelected);
        if (data && (data !== null || data !== undefined)) {
          setNews(data);
          setLoad(false);
        } else {
          fetchItem(link);
        }
        // }, 1000);
      };

      fetchData();
    }

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [
    type,
    setType,
    route.params?.reload,
    route?.params?.numberReload,
    counter,
    setCounter,
  ]);

  const handleType = (type: string) => {
    setType(type);
    console.warn('Type selected : ', type);
  };

  const navigate = (params: any) => {
    navigationService.navigate('Article', {
      item: params,
    });
  };

  const fetchItem = async (linkSelected: string) => {
    await fetchPublicData(linkSelected).then(async resp => {
      if (resp.articles && resp.articles !== undefined) {
        let sliceData: any = resp.articles;

        if (resp.articles.length >= 10) {
          sliceData = resp.articles.slice(0, 20);
        }

        setNews(sliceData);

        setLoad(false);
        console.warn('data : ', news);
      } else {
        let sliceData: any = resp.data;

        setNews(sliceData);
        await storeAsyncStorage(sliceData, type, linkSelected);

        setLoad(false);
        console.warn('data : ', news);
      }
    });
  };

  const onRefresh = async () => {
    setLoad(true);
    setRefreshing(true);
    await fetchItem(linkSelected);
    setRefreshing(false);
  };

  const renderitem = ({item}: any) => {
    // let items: DashboardStates = {
    //   author: item.author,
    //   title: item.title,
    //   description: item.description,
    //   url: undefined,
    //   urlToImage: undefined,
    //   publishedAt: undefined,
    //   content: undefined,
    // };
    if (item.author) {
      return (
        <NewsList
          author={item.author}
          title={item.title}
          description={item.description}
          url={item.url}
          urlToImage={
            item.urlToImage
              ? item.urlToImage
              : item.image
              ? item.image
              : 'default'
          }
          publishedAt={item.publishedAt ? item.publishedAt : item.published_at}
          content={item.content}
          navigate={() => navigate(item)}
        />
      );
    }
    return null;
  };
  // let date = new Date(Date.now()).toLocaleDateString('en-GB');
  return (
    <View style={{flex: 1}}>
      <StatusBar
        animated={true}
        backgroundColor="red"
        barStyle={statusBarStyle}
        hidden={false}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: screens.screenWidth,
            height: screens.screenHeight * 0.2,
            backgroundColor: colors.primary,
          }}>
          <View style={{flex: 0.8}} />
          <View style={{paddingHorizontal: 20}}>
            {/* <Text
              style={{
                fontSize: moderateScale(32),
                fontWeight: '700',
                color: colors.white,
              }}>
              My Warta
            </Text> */}
            <FastImage
              style={{
                width: moderateScale(120),
                height: moderateScale(50),
                marginVertical: 8,
              }}
              resizeMode={'stretch'}
              source={Images.app_logo_primary}
            />
            <Text style={{color: colors.white, fontSize: moderateScale(11)}}>
              {time} {counter} {route.params?.numberReload}
            </Text>
          </View>
        </View>

        <HorizontalScroll
          name={name}
          onpress={handleType}
          selectedItem={type}
        />
      </View>
      {/* <View style={{flex: 1}}> */}
      <View style={{flex: 1}}>
        {load ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              height: screens.screenHeight * 0.7,
            }}>
            <ActivityIndicator style={{alignSelf: 'center'}} size={'small'} />
          </View>
        ) : (
          <FlatList
            data={news}
            refreshing={refreshing}
            onRefresh={onRefresh}
            renderItem={renderitem}
            keyExtractor={(item: NewsProps) => `${item.url}`}
          />
        )}
      </View>
    </View>
    // </View>
  );
};

export default DashboardScreen;
