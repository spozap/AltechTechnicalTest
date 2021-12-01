import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchUserData = async () => {
  return await AsyncStorage.getItem('users');
};

export const saveUserData = async user => {
  await AsyncStorage.setItem('users', JSON.stringify(user));
};
