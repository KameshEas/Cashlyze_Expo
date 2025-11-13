
import { Icon } from '@/components/Icon';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const DARK_BLUE = '#0A192F';
const NAVY_BLUE = '#102A4C';
const LIGHT_BLUE = '#3A8DFF';
const TEXT_PRIMARY = '#FFFFFF';
const TEXT_SECONDARY = '#A8B2C3';
const BORDER_COLOR = '#1F3A5F';

const StartScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="BarChart" size={50} color="#3A8DFF" />
      </View>
      <Text style={styles.title}>Get started with Cashlyze</Text>
      <Text style={styles.subtitle}>Create an account or sign in to continue.</Text>

      <TouchableOpacity style={styles.googleButton}>
        <Icon name="Chrome" size={20} color="#000" style={{ marginRight: 12 }}/>
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.appleButton}>
        <Icon name="Apple" size={20} color="#FFF" style={{ marginRight: 12 }} />
        <Text style={styles.appleButtonText}>Continue with Apple</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.divider} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={TEXT_SECONDARY}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.emailButton} onPress={() => router.push('/(auth)/login')}>
        <Text style={styles.emailButtonText}>Continue with Email</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        By continuing, you agree to Cashlyze's{' '}
        <Text style={styles.link} onPress={() => Linking.openURL('#')}>
          Terms of Service
        </Text>{' '}
        and{' '}
        <Text style={styles.link} onPress={() => Linking.openURL('#')}>
          Privacy Policy
        </Text>
        .
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_BLUE,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  iconContainer: {
    width: 90,
    height: 90,
    borderRadius: 22,
    backgroundColor: '#1F3A5F',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: TEXT_PRIMARY,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: TEXT_SECONDARY,
    textAlign: 'center',
    marginBottom: 40,
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 16,
  },
  googleButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  appleButton: {
    flexDirection: 'row',
    backgroundColor: '#000',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#FFF'
  },
  appleButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: BORDER_COLOR,
  },
  orText: {
    color: TEXT_SECONDARY,
    marginHorizontal: 16,
  },
  input: {
    backgroundColor: NAVY_BLUE,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    color: TEXT_PRIMARY,
    width: '100%',
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
  },
  emailButton: {
    backgroundColor: LIGHT_BLUE,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    width: '100%',
    marginBottom: 24,
  },
  emailButtonText: {
    color: TEXT_PRIMARY,
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    color: TEXT_SECONDARY,
    textAlign: 'center',
    fontSize: 12,
  },
  link: {
    color: LIGHT_BLUE,
    textDecorationLine: 'underline',
  },
});

export default StartScreen;
