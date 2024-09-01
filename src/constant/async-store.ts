import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

export const storeAsyncStorage = async (data: any, type: any, baseURL: any) => {
  const tableName = type + baseURL;

  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(`${tableName}`, jsonValue);
    console.warn(
      'Array stored successfully in table ',
      tableName,
      ' :',
      jsonValue,
    );
  } catch (e) {
    console.error('Error storing array: ', e);
  }
};

export const retrieveAsyncStorage = async (type: any, baseURL: any) => {
  const tableName = type + baseURL;
  try {
    const jsonValue = await AsyncStorage.getItem(`${tableName}`);
    const array = jsonValue != null ? JSON.parse(jsonValue) : null;
    console.warn('Retrieved array from table : ', tableName, ' :', array);

    return array;
  } catch (e) {
    console.error('Error retrieving array: ', e);
  }
};
