
import { View, type ViewProps } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { PremiumTheme } from '@/constants/theme';

export type ThemedViewProps = ViewProps & {
  lightColor?: string; // For one-off overrides
  darkColor?: string;  // For one-off overrides
  level?: 'background' | 'surface' | 'surface2'; // Use predefined theme surfaces
  shadow?: 'soft' | 'medium'; // Use predefined theme shadows
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  level,
  shadow,
  ...otherProps
}: ThemedViewProps) {
  const theme = useColorScheme() ?? 'light';

  // Determine the background color
  let colorToUse: string;

  if (theme === 'light') {
    colorToUse = lightColor ?? PremiumTheme.colors.light[level ?? 'background'];
  } else {
    colorToUse = darkColor ?? PremiumTheme.colors.dark[level ?? 'background'];
  }
  
  const backgroundColor = colorToUse;

  // Get shadow styles from the theme
  const shadowStyle = shadow ? PremiumTheme.shadows[shadow] : {};

  return <View style={[{ backgroundColor }, shadowStyle, style]} {...otherProps} />;
}
