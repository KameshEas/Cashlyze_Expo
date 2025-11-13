
import { Icon } from '@/components/Icon';
import { ThemedText } from '@/components/themed-text';
import Checkbox from 'expo-checkbox';
import { useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { auth, db } from '@/config/firebase'; // Make sure this path is correct
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import Toast from '@/components/Toast';

const DARK_BLUE = '#0A192F';
const NAVY_BLUE = '#102A4C';
const LIGHT_BLUE = '#3A8DFF';
const TEXT_PRIMARY = '#FFFFFF';
const TEXT_SECONDARY = '#A8B2C3';
const BORDER_COLOR = '#1F3A5F';

const StartScreen = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    const getEmail = async () => {
      try {
        const savedEmail = await SecureStore.getItemAsync('email');
        if (savedEmail) {
          setEmail(savedEmail);
          setRememberMe(true);
        }
      } catch (error) {
        console.error('Failed to load email', error);
      }
    };
    getEmail();
  }, []);

  const handleRememberMe = async (value) => {
    setRememberMe(value);
    if (value) {
      try {
        await SecureStore.setItemAsync('email', email);
      } catch (error) {
        console.error('Failed to save email', error);
      }
    } else {
      try {
        await SecureStore.deleteItemAsync('email');
      } catch (error) {
        console.error('Failed to delete email', error);
      }
    }
  };

  const handleAuth = async () => {
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        setToastMessage('Login Successful');
        setToastVisible(true);
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        if (user) {
          await updateProfile(user, { displayName: name });
          await setDoc(doc(db, 'users', user.uid), {
            name,
            email,
          });
        }
        setToastMessage('Signup Successful');
        setToastVisible(true);
      }
    } catch (error) {
      Alert.alert('Authentication Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Toast
        visible={toastVisible}
        message={toastMessage}
        onHide={() => {
          setToastVisible(false);
          router.replace('/(tabs)');
        }}
      />
      <View style={styles.iconContainer}>
        <Icon name="BarChart" size={50} color="#3A8DFF" />
      </View>
      <Text style={styles.title}>{isLogin ? 'Welcome Back' : 'Create Account'}</Text>

      {!isLogin && (
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor={TEXT_SECONDARY}
          value={name}
          onChangeText={setName}
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={TEXT_SECONDARY}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={TEXT_SECONDARY}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {isLogin && (
        <View style={styles.optionsContainer}>
          <View style={styles.checkboxContainer}>
            <Checkbox value={rememberMe} onValueChange={handleRememberMe} />
            <ThemedText style={styles.rememberMeText}>Remember Me</ThemedText>
          </View>
          <TouchableOpacity onPress={() => router.push('/(auth)/forgot-password')}>
            <Text style={styles.link}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.emailButton} onPress={handleAuth}>
        <Text style={styles.emailButtonText}>{isLogin ? 'Login' : 'Sign Up'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
        <Text style={styles.footerText}>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <Text style={styles.link}>{isLogin ? 'Sign Up' : 'Sign In'}</Text>
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
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    marginLeft: 8,
    color: TEXT_SECONDARY,
  },
});

export default StartScreen;
