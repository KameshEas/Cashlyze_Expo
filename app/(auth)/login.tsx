
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

export default function LoginScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Cashlyze</ThemedText>
      <ThemedText style={styles.tagline}>Know where your money flows.</ThemedText>
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
      <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Link href="/(auth)/signup" style={styles.link}>
        <ThemedText>Don't have an account? Sign up</ThemedText>
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
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    textAlign: 'center',
    color: '#64748B',
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
