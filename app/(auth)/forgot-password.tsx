
import { Icon } from '@/components/Icon';
import { ThemedText } from '@/components/themed-text';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { auth } from '@/config/firebase';
import {
  sendPasswordResetEmail,
  fetchSignInMethodsForEmail,
} from 'firebase/auth';
import Toast from '@/components/Toast';

const DARK_BLUE = '#0A192F';
const NAVY_BLUE = '#102A4C';
const LIGHT_BLUE = '#3A8DFF';
const TEXT_PRIMARY = '#FFFFFF';
const TEXT_SECONDARY = '#A8B2C3';
const BORDER_COLOR = '#1F3A5F';

const ForgotPasswordScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handlePasswordReset = async () => {
    try {
      const methods = await fetchSignInMethodsForEmail(auth, email);
      if (methods.length > 0) {
        await sendPasswordResetEmail(auth, email);
        setToastMessage('Password reset email sent!');
        setToastVisible(true);
      } else {
        setToastMessage('No account found with this email. Please sign up.');
        setToastVisible(true);
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Toast
        visible={toastVisible}
        message={toastMessage}
        onHide={() => setToastVisible(false)}
      />
      <View style={styles.iconContainer}>
        <Icon name="BarChart" size={50} color="#3A8DFF" />
      </View>
      <Text style={styles.title}>Forgot Password</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={TEXT_SECONDARY}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity
        style={styles.emailButton}
        onPress={handlePasswordReset}>
        <Text style={styles.emailButtonText}>Send Reset Link</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/(auth)/start')}>
        <Text style={styles.footerText}>
          Back to{' '}
          <Text style={styles.link}>Login</Text>
        </Text>
      </TouchableOpacity>
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
    marginBottom: 40,
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
    fontSize: 14,
  },
  link: {
    color: LIGHT_BLUE,
    textDecorationLine: 'underline',
  },
});

export default ForgotPasswordScreen;
