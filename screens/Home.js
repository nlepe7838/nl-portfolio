import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default function Home({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >

      <View style={styles.overlay}>
        <Text style={styles.title}>Nicolas Lepe</Text>

        <Text style={styles.subtitle}>
          UI/UX Designer | Digital Media Student
        </Text>

        <Text style={styles.description}>
          Welcome to my portfolio. Here you can learn more about me, explore my
          projects, and find ways to get in touch.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('About')}
          >
            <Text style={styles.buttonText}>About</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Projects')}
          >
            <Text style={styles.buttonText}>Projects</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Contact')}
          >
            <Text style={styles.buttonText}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.53)', // adjust opacity
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  title: {
    color: '#fff',
    fontSize: 56,
    fontWeight: '800',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    color: '#d9d9d9',
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    color: '#bfbfbf',
    fontSize: 18,
    lineHeight: 30,
    textAlign: 'center',
    maxWidth: 700,
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  },
  button: {
    backgroundColor: '#111',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});