import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { PremiumTheme } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Profile</ThemedText>

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: PremiumTheme.colors.primaryGradient[0],
            ...PremiumTheme.shadows.soft,
          },
        ]}>
        <ThemedText style={{ color: 'white' }}>Sign Out</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 24,
  },
});
