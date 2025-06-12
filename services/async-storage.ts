import AsyncStorage from '@react-native-async-storage/async-storage';

export const Storage = () => {
  const getItem = async (key: string): Promise<string | null> => {
    return new Promise((resolve) => {
      const value = AsyncStorage.getItem(key);
      resolve(value);
    });
  };

  const setItem = async (key: string, value: string): Promise<void> => {
    return new Promise((resolve) => {
      AsyncStorage.setItem(key, value);
      resolve();
    });
  };

  const removeItem = async (key: string): Promise<void> => {
    return new Promise((resolve) => {
      AsyncStorage.removeItem(key);
      resolve();
    });
  };

  return { getItem, setItem, removeItem };
}