
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

export default function SignupScreen() {
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Create Account</ThemedText>
      <TextInput
        style={[styles.input, { color: Colors[colorScheme ?? 'light'].text, borderColor: Colors[colorScheme ?? 'light'].border }]}
        placeholder="Full Name"
        placeholderTextColor={Colors[colorScheme ?? 'light'].subtleText}
      />
      <TextInput
        style={[styles.input, { color: Colors[colorScheme ?? 'light'].text, borderColor: Colors[colorScheme ?? 'light'].border }]}
        placeholder="Email"
        placeholderTextColor={Colors[colorScheme ?? 'light'].subtleText}
      />
      <TextInput
        style={[styles.input, { color: Colors[colorScheme ?? 'light'].text, borderColor: Colors[colorScheme ?? 'light'].border }]}
        placeholder="Password"
        placeholderTextColor={Colors[colorScheme ?? 'light'].subtleText}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Link href="/(auth)/login" style={styles.link}>
        <ThemedText>Already have an account? Login</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F7FAFC',
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    textAlign: 'center',
    color: '#0F172A',
    marginBottom: 48,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2A9D8F',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  link: {
    textAlign: 'center',
  },
});
