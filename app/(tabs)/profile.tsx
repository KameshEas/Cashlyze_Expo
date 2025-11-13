
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { PremiumTheme } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { auth } from '@/config/firebase';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const router = useRouter();

  const handleLogout = async () => {
    await auth.signOut();
    router.replace('/(auth)/start');
  };

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
        ]}
        onPress={handleLogout}>
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
