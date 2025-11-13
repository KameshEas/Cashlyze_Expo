
import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing, Text } from 'react-native';
import { useRouter } from 'expo-router';

const DARK_BLUE = '#0A192F';
const ACCENT_BLUE = '#3A8DFF';

export default function SplashScreen() {
  const router = useRouter();
  const progress = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.8)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const ring1 = useRef(new Animated.Value(0)).current;
  const ring2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animations
    Animated.stagger(300, [
      // Pulsating rings
      Animated.loop(
        Animated.timing(ring1, {
          toValue: 1,
          duration: 2000,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        })
      ),
      Animated.loop(
        Animated.timing(ring2, {
          toValue: 1,
          duration: 2000,
          delay: 1000,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        })
      ),
      // Content fade in and scale up
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          friction: 4,
          useNativeDriver: true,
        }),
      ]),
      // Progress bar animation
      Animated.timing(progress, {
        toValue: 1,
        duration: 2500, // Simulate loading time
        easing: Easing.linear,
        useNativeDriver: false, // Width animation not supported by native driver
      }),
    ]).start();

    // Navigate after animation
    const timer = setTimeout(() => {
      router.replace('/onboarding'); // Navigate to the main app
    }, 3000); // Total splash screen duration

    return () => clearTimeout(timer);
  }, []);

  const ring1Style = {
    opacity: ring1.interpolate({
      inputRange: [0, 1],
      outputRange: [0.3, 0],
    }),
    transform: [
      {
        scale: ring1.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 3],
        }),
      },
    ],
  };

  const ring2Style = {
    opacity: ring2.interpolate({
      inputRange: [0, 1],
      outputRange: [0.3, 0],
    }),
    transform: [
      {
        scale: ring2.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 3],
        }),
      },
    ],
  };

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <Animated.View style={[styles.ring, ring1Style]} />
        <Animated.View style={[styles.ring, ring2Style]} />

        <Animated.View style={{ transform: [{ scale }], opacity }}>
          <View style={styles.logoContainer}>
            <Animated.Image
              source={require('@/assets/images/splash-icon.png')} // Using existing icon
              style={styles.logo}
            />
          </View>
        </Animated.View>

        <Animated.View style={{ opacity }}>
          <Text style={styles.title}>Cashlyze</Text>
          <Text style={styles.subtitle}>Your Finances, Simplified.</Text>
        </Animated.View>
      </View>

      <View style={styles.progressBarContainer}>
        <Animated.View style={[styles.progressBar, { width: progressWidth }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_BLUE,
    justifyContent: 'center',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ring: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: ACCENT_BLUE,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 22,
    backgroundColor: ACCENT_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    tintColor: '#FFFFFF', // Assuming the icon is a single color
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: '#A8B2C3',
    textAlign: 'center',
    marginTop: 8,
  },
  progressBarContainer: {
    height: 6,
    width: '80%',
    backgroundColor: '#1F3A5F',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 40,
  },
  progressBar: {
    height: '100%',
    backgroundColor: ACCENT_BLUE,
    borderRadius: 3,
  },
});
