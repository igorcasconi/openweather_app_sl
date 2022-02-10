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

export const clearDataStorage = async (key: string) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (err) {
    console.log(err);
  }
};

export const removeDataStorage = async <T>(
  key: string,
  value: any,
  arrayKey: keyof T,
) => {
  try {
    const arrayData = await getDataStorage<T>(key);
    //@ts-ignore
    const arrayFiltered = arrayData.filter(
      (item: T) => item[arrayKey] !== value,
    );
    const parsedJSONArray = JSON.stringify(arrayFiltered);
    await AsyncStorage.setItem(key, parsedJSONArray);
  } catch (err) {
    console.log(err);
  }
};
