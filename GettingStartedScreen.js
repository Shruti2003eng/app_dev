import React from 'react';
import { View, Text, Button, ImageBackground, Switch, StyleSheet } from 'react-native';

const backgroundImageUrl = 'https://th.bing.com/th/id/OIP.2iu7qdeSJ3JrV7ptp0ZegwHaNK?w=187&h=333&c=7&r=0&o=5&dpr=1.3&pid=1.7'
const GettingStartedScreen = ({ navigation, isDarkTheme, setIsDarkTheme }) => {
  return (
    <ImageBackground source={{ uri: backgroundImageUrl }} style={styles.background}>
      <View style={styles.container}>
        <Text>Getting Started</Text>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Sign')}
        />
        <View style={styles.switchContainer}>
          <Text>Dark Theme</Text>
          <Switch value={isDarkTheme} onValueChange={setIsDarkTheme} />
        </View>
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
    padding: 20,
    borderRadius: 10,
    
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default GettingStartedScreen;