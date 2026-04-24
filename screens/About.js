import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.textSection}>
          <Text style={styles.heading}>Hello</Text>

          <Text style={styles.paragraph}>
            I’m Nicolas Lepe, a Digital Media student at the University of Central Florida specializing in Web and Interactive Media. I’m passionate about UI/UX design and enjoy exploring how technology and creativity come together to create meaningful user experiences.
          </Text>

          <Text style={styles.paragraph}>
            I’m particularly interested in designing intuitive, user-centered interfaces that not only look visually appealing but also function seamlessly. Through my academic work and personal projects, I’ve developed skills in design tools like Figma and front-end technologies such as HTML, CSS, and React.
          </Text>

            <Text style={styles.paragraph}>
            Beyond my studies, I have a strong appreciation for digital media and music, which continue to influence my creative perspective. I’m always looking for opportunities to grow as a designer and contribute to projects that make a real impact.
            </Text>
        </View>

        <View style={styles.imageSection}>
          <Image
            source={require('../assets/profile.jpg')}
            style={styles.profileImage}
            resizeMode="cover"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 60,
    paddingVertical: 60,
    backgroundColor: '#000',
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  textSection: {
    flex: 1,
    maxWidth: 650,
    paddingRight: 60, 
  },
  heading: {
    color: '#fff',
    fontSize: 72,
    fontWeight: '800',
    marginBottom: 40,
  },
  paragraph: {
    color: '#f2f2f2',
    fontSize: 20,
    lineHeight: 38,
    marginBottom: 24,
  },
  imageSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 500,
    height: 750,
  },
});