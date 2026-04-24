import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = () => {
    setError('');
    setSuccess('');

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      setError('Please fill out all fields.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }

    setSuccess('Thank you! Your message has been submitted.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Contact Me</Text>

      <Text style={styles.description}>
        Have a question or want to connect? Fill out the form below.
      </Text>

      <View style={styles.contactInfo}>
        <Text style={styles.contactText}>
          Email: nicolasilepe@gmail.com
        </Text>

        <Text style={styles.contactText}>
          Phone: (321) 300-8952
        </Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Your Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Your Message"
          placeholderTextColor="#888"
          value={message}
          onChangeText={setMessage}
          multiline
        />

        {error !== '' && <Text style={styles.error}>{error}</Text>}
        {success !== '' && <Text style={styles.success}>{success}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.links}>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:nicolasilepe@gmail.com')}>
          <Text style={styles.linkText}>Email</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/nicolas-lepe')}>
          <Text style={styles.linkText}>LinkedIn</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    color: '#fff',
    fontSize: 48,
    fontWeight: '800',
    marginBottom: 15,
    textAlign: 'center',
  },

  description: {
    color: '#ccc',
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
    maxWidth: 600,
  },

  form: {
    backgroundColor: '#111',
    padding: 25,
    borderRadius: 10,
    marginBottom: 30,
    width: '100%',
    maxWidth: 500,
  },

  input: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    fontSize: 16,
    marginBottom: 15,
  },

  messageInput: {
    height: 130,
    textAlignVertical: 'top',
  },

  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },

  buttonText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '700',
  },

  error: {
    color: '#ff6b6b',
    marginBottom: 10,
    fontSize: 15,
  },

  success: {
    color: '#7CFC98',
    marginBottom: 10,
    fontSize: 15,
  },

  links: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
  },

  linkText: {
    color: '#fff',
    fontSize: 18,
    textDecorationLine: 'underline',
  },

  contactInfo: {
    marginBottom: 25,
    alignItems: 'center',
  },

  contactText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 5,
  },
});