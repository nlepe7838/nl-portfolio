import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';

export default function Projects() {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Projects</Text>

      {/* National Park */}
      <View style={styles.card}>
        <View style={styles.textSection}>
          <Text style={styles.title}>National Park Guide App</Text>

          <Text style={styles.description}>
            A mobile-first app concept designed to help users explore U.S.
            National Parks more easily. The app brings together maps, event
            information, and trip-planning tools into one accessible platform.
          </Text>

          <Text style={styles.description}>
            The project focused on improving the visitor experience by creating
            a simple and intuitive interface for travelers, families, hikers,
            and eco-tourists. Key design goals included accessibility, offline
            usability, and clear navigation for users of all ages.
          </Text>

          <Text style={styles.meta}>Role: UX/UI Designer</Text>
          <Text style={styles.meta}>Tools: Figma, Research, Wireframing</Text>

          <View style={styles.linkContainer}>
            <TouchableOpacity
              style={styles.linkButton}
              onPress={() =>
                openLink(
                  'https://docs.google.com/presentation/d/1CvESVYk6BUYm_F1JN-atgLh5gOJr3rGzp0GrmPnBgbM/edit?usp=sharing'
                )
              }
            >
              <Text style={styles.linkText}>View Slides</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.linkButton}
              onPress={() =>
                openLink(
                  'https://docs.google.com/document/d/1P2q86f9BUWTkmBngGG8rSIFe2tmYAmgKVOe2TH_dr-o/edit?usp=sharing'
                )
              }
            >
              <Text style={styles.linkText}>View Report</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Image
          source={require('../assets/nationalpark.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.card}>
        <View style={styles.textSection}>
          <Text style={styles.title}>My Friends & I App</Text>

          <Text style={styles.description}>
            A collaborative planning app designed to help groups of friends organize
            activities, make decisions, and stay connected in one place. Users can
            share ideas, vote on plans, and communicate seamlessly.
          </Text>

          <Text style={styles.description}>
            The project focused on solving issues with scattered communication by
            creating a centralized platform where users can track plans and progress
            together.
          </Text>

          <Text style={styles.meta}>Role: UX/UI Designer</Text>
          <Text style={styles.meta}>
            Focus: Collaboration, User Flow
          </Text>

          <View style={styles.linkContainer}>
            <TouchableOpacity
              style={styles.linkButton}
              onPress={() =>
                openLink(
                  'https://docs.google.com/presentation/d/1j4w-UVN2gs2hNMhDuOzyby6Zd8dXJdAV1vtSTM1NlRw/edit?usp=sharing'
                )
              }
            >
              <Text style={styles.linkText}>View Slides</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Image
          source={require('../assets/myfriendsandi.png')}
          style={styles.logo}
        />
      </View>

      {/* Eco Shopper */}
      <View style={styles.card}>
        <View style={styles.textSection}>
          <Text style={styles.title}>Eco Shopper</Text>

          <Text style={styles.description}>
            A virtual shopping platform designed to help users discover sustainable
            clothing brands and products more easily. The app focuses on simplifying
            the shopping experience through better filtering, clearer product
            discovery, and a smoother checkout process.
          </Text>

          <Text style={styles.description}>
            This project addressed the challenge users face when trying to identify
            truly sustainable fashion options in commerce apps. Eco Shopper was
            designed to make shopping more efficient by allowing users to filter
            brands, store locations, and specific items based on their needs.
          </Text>

          <Text style={styles.meta}>
            Role: Product Designer, UI/UX Designer
          </Text>

          <Text style={styles.meta}>Tools: Figma</Text>

          <View style={styles.linkContainer}>
            <TouchableOpacity
              style={styles.linkButton}
              onPress={() =>
                openLink(
                  'https://docs.google.com/presentation/d/1CRnj1l55bz3QPZODFLAVEFkUWV62ZJp1DI7WmClJYc0/edit?usp=sharing'
                )
              }
            >
              <Text style={styles.linkText}>View Slides</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Image
          source={require('../assets/ecoshopper.png')}
          style={styles.logo}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    padding: 40,
    alignItems: 'center'
  },

  heading: {
    color: '#fff',
    fontSize: 48,
    fontWeight: '800',
    marginBottom: 30,
    textAlign: 'center',
    width: '100%', 
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#111',
    padding: 25,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    maxWidth: 1200,
  },

  textSection: {
    flex: 1,
    paddingRight: 25,
  },

  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 15,
  },
  description: {
    color: '#e5e5e5',
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 12,
  },
  meta: {
    color: '#aaa',
    fontSize: 16,
    marginTop: 5,
  },

  linkContainer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 10,
  },
  linkButton: {
    backgroundColor: '#222',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#444',
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});