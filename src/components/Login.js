import React, {useState} from 'react';
import {Alert, StyleSheet, Text} from 'react-native';
import {Button, TextInput, View} from 'react-native';

const Login = () => {
  const [userData, setUserData] = useState({email: '', password: ''});

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
      <Button
        color="red"
        title="Log in"
        onPress={() => Alert.alert(JSON.stringify(userData))}
      />
      <Text style={styles.register}> Or </Text>
      <Button
        color="green"
        title="Register"
        onPress={() => Alert.alert(JSON.stringify(userData))}
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
