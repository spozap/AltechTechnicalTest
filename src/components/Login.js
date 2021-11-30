import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button, TextInput, View} from 'react-native';
import {fetchUsers} from '../helpers/auth';
const Login = ({navigation}) => {
  const [userData, setUserData] = useState({email: '', password: ''});
  const [error, setError] = useState('');
  const login = () => {
    if (!userData.email || !userData.password) {
      return;
    }

    fetchUsers().then(data => {
      const users = JSON.parse(data);
      console.log(users);
      users.forEach(user => {
        if (
          user.email === userData.email &&
          user.password === userData.password
        ) {
          console.log('valido');
          navigation.push('Profile');
        }
      });
      setError('User does not exist!');
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email..."
        style={styles.input}
        onChangeText={data => setUserData({...userData, email: data})}
      />
      <TextInput
        placeholder="Password..."
        style={styles.input}
        onChangeText={data => setUserData({...userData, password: data})}
      />
      <Button color="red" title="Log in" onPress={() => login(userData)} />
      <Text style={styles.register}> Or </Text>
      <Button
        color="green"
        title="Register"
        onPress={() => navigation.push('Register')}
      />
      <Text color="red">{error}</Text>
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
});

export default Login;
