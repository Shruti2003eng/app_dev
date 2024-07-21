// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const backgroundImageUrl = 'https://th.bing.com/th/id/OIP.mR5uAVxZA0PbxeXSe2RThgHaJ4?w=208&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7';  

const Login = ({ navigation, setUsername,setPassword }) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = () => {
    setUser(user);
      setPass(pass);
    navigation.navigate('Product');
  };

  return (
    <ImageBackground source={{ uri: backgroundImageUrl }} style={styles.background}>
      <Ionicons name="checkmark-circle" size={40} color="black" />
      <Text  style={{fontSize:20}}>LOGIN PAGE</Text>
      <View style={styles.container}>
        <Text>USERNAME</Text>
        <TextInput
          placeholder="Enter Username"
          value={user}
          onChangeText={setUser}
          style={styles.input}
        />
        <Text>PASSWORD</Text>
        <TextInput
          placeholder="Enter password"
          value={pass}
          onChangeText={setPass}
          style={styles.input}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 10,
    padding: 5,
  },
});

export default Login;