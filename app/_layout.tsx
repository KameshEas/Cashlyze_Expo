
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/config/firebase';

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      <Stack.Screen name="budget-modal" options={{ presentation: 'modal' }} />
      {/* <Stack.Screen name="add-transaction-modal" options={{ presentation: 'modal' }} /> */}
    </Stack>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const segments = useSegments();
  const [user, setUser] = useState<User | null>(null);
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuthLoaded(true);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!authLoaded) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (user && !inAuthGroup) {
      router.replace('/(tabs)');
    } else if (!user) {
      router.replace('/(auth)/start');
    }
  }, [authLoaded, user, segments]);

  if (!authLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootLayoutNav />
        <StatusBar style="auto" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
