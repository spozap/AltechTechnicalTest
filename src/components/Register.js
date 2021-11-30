import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {TextInput, Button, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = () => {
  const [userData, setData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  });

  const register = async () => {
    console.log(userData);

    try {
      await AsyncStorage.setItem('users', JSON.stringify(userData));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name.."
        style={styles.input}
        onChangeText={data => setData({...userData, name: data})}
      />
      <TextInput
        placeholder="Surname..."
        style={styles.input}
        onChangeText={data => setData({...userData, surname: data})}
      />
      <TextInput
        placeholder="Email..."
        style={styles.input}
        onChangeText={data => setData({...userData, email: data})}
      />
      <TextInput
        placeholder="Password..."
        style={styles.input}
        onChangeText={data => setData({...userData, password: data})}
      />
      <Button title="Register" onPress={() => register()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
  },
});

export default Register;
