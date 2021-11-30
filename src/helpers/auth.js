import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchUsers = async () => {
  return await AsyncStorage.getItem('users');
};
