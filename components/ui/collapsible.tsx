
import { PropsWithChildren, useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  LayoutAnimation,
  UIManager,
  Platform,
  Animated,
  Pressable,
} from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

// Enable LayoutAnimation for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';
  const rotationAnim = useRef(new Animated.Value(0)).current;

  // Animate rotation when isOpen changes
  useEffect(() => {
    Animated.timing(rotationAnim, {
      toValue: isOpen ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  const handlePress = () => {
    // Animate layout changes (height)
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen((value) => !value);
  };

  const rotate = rotationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  return (
    <ThemedView style={styles.card}>
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [styles.heading, pressed && styles.headingPressed]}
        hitSlop={10}
      >
        <Animated.View style={{ transform: [{ rotate }] }}>
          <IconSymbol
            name="chevron.right"
            size={18}
            weight="medium"
            color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
          />
        </Animated.View>
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </Pressable>
      {isOpen && (
        <ThemedView style={styles.content}>
          {children}
        </ThemedView>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    marginVertical: 4,
    padding: 4, // Padding for the outer card
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 12, // Increase tappable area and inner spacing
    borderRadius: 8,
  },
  headingPressed: {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
  content: {
    marginTop: 8,
    paddingHorizontal: 12,
    paddingBottom: 12,
    marginLeft: 24, // Indent content relative to icon
  },
});
