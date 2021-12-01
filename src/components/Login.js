import React, {useContext, useState} from 'react';
import {Alert, StyleSheet, Text} from 'react-native';
import {Button, TextInput, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../context/authcontext';

const Login = ({navigation}) => {
  const [userData, setUserData] = useState({email: '', password: ''});

  const {setUser} = useContext(UserContext);

  const login = async () => {
    if (!userData.email || !userData.password) {
      return;
    }

    const users = await AsyncStorage.getItem('users');
    const Users = JSON.parse(users);

    if (!Users) {
      Alert.alert('User does not exist!');
      return;
    }

    if (
      !(Users.email === userData.email && Users.password === userData.password)
    ) {
      Alert.alert('Invalid username or password');
      return;
    }

    console.log(users);
    setUser(Users);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.login}> Login </Text>
      <TextInput
        placeholder="Email..."
        style={styles.input}
        keyboardType="email-address"
        onChangeText={data => setUserData({...userData, email: data})}
      />
      <TextInput
        placeholder="Password..."
        style={styles.input}
        keyboardType="visible-password"
        onChangeText={data => setUserData({...userData, password: data})}
      />
      <Button color="red" title="Log in" onPress={() => login(userData)} />
      <Text style={styles.register}> Or </Text>
      <Button
        color="green"
        title="Register"
        onPress={() => navigation.push('Register')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',
    borderRadius: 3,
    marginVertical: 7,
  },
  loginBtn: {
    width: '100%',
    color: 'red',
  },
  register: {
    textAlign: 'center',
  },
  login: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Login;
