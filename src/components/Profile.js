import React, {useContext, useState} from 'react';
import {View, TextInput, StyleSheet, Button, Alert, Text} from 'react-native';
import {UserContext} from '../context/authcontext';
import {saveUserData} from '../helpers/auth';

const Profile = () => {
  const {user, setUser} = useContext(UserContext);
  const [data, setData] = useState(user);

  const modifyUser = () => {
    // Updating data on AsyncStorage and state
    saveUserData(data);
    setUser(data);
    Alert.alert('User modified successfully!');
  };

  return (
    <View>
      <>
        <Text>Username</Text>
        <TextInput
          style={styles.input}
          value={data.name}
          onChangeText={name => setData({...data, name: name})}
        />
      </>
      <>
        <Text>Surname</Text>
        <TextInput
          value={data.surname}
          style={styles.input}
          onChangeText={surname => setData({...data, surname: surname})}
        />
      </>
      <>
        <Text>Email</Text>

        <TextInput value={data.email} style={styles.input} editable={false} />
      </>

      <Button title="Update user" onPress={() => modifyUser()} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default Profile;
