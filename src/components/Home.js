import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {UserContext} from '../context/authcontext';

const Home = ({navigation}) => {
  const {user, setUser} = useContext(UserContext);

  const logout = async () => {
    setUser(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}> Welcome back {user.name} </Text>
      <Button
        title="Private profile"
        onPress={() => navigation.push('Profile')}
      />
      <Button title="Log out" onPress={() => logout()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 15,
  },
});

export default Home;
