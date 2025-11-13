
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Cashlyze</ThemedText>
      <ThemedText style={styles.subtitle}>Know where your money flows</ThemedText>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/signup')}>
        <ThemedText style={styles.buttonText}>Sign Up</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
        <ThemedText style={styles.buttonText}>Login</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 48,
  },
  button: {
    backgroundColor: '#2A9D8F',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 24,
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
