import AsyncStorage from '@react-native-async-storage/async-storage';
import {setArrayInJSONStringify} from './ArraysAndObjects';

// @ts-ignore
export const getDataStorage = async <T>(key: string): T => {
  try {
    const dataStorage = await AsyncStorage.getItem(key);
    return dataStorage && JSON.parse(dataStorage);
  } catch (err) {
    console.log(err);
  }
};

export const setStorageArrayData = async <T>(key: string, value: any) => {
  try {
    const beforeValueArray = await getDataStorage<T>(key);
    //@ts-ignore
    const parsedJSONArray = setArrayInJSONStringify<T>(value, beforeValueArray);
    await AsyncStorage.setItem(key, parsedJSONArray);
  } catch (err) {
    console.log(err);
  }
};

export const setDataStorage = async (key: string, value: any) => {
  try {
    const parsedValue = JSON.stringify(value);
    return await AsyncStorage.setItem(key, parsedValue);
  } catch (err) {
    console.log(err);
  }
};
