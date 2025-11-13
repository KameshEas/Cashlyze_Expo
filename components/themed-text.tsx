
import { StyleSheet, Text, type TextProps } from 'react-native';
import { useThemeColor } from '@/hooks/use-theme-color';
import { PremiumTheme } from '@/constants/theme';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'title' | 'section' | 'body' | 'caption' | 'link' | 'bodySemiBold';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'body', // Default to 'body' for general text
  ...rest
}: ThemedTextProps) {
  // Use new theme colors
  const color = useThemeColor({ light: PremiumTheme.colors.light.text, dark: PremiumTheme.colors.dark.text }, 'text');

  // Determine the font style based on the type
  const getStyleForType = () => {
    switch (type) {
      case 'title':
        return styles.title;
      case 'section':
        return styles.section;
      case 'caption':
        return styles.caption;
      case 'link':
        return styles.link;
      case 'bodySemiBold':
        return styles.bodySemiBold;
      case 'body':
      default:
        return styles.body;
    }
  };

  return (
    <Text
      style={[
        { color },
        getStyleForType(), // Apply font styles from the theme
        style, // Allow overriding with custom styles
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: PremiumTheme.fonts.family,
    fontSize: PremiumTheme.fonts.sizes.title,
    fontWeight: PremiumTheme.fonts.weights.semiBold,
    letterSpacing: 0.2,
  },
  section: {
    fontFamily: PremiumTheme.fonts.family,
    fontSize: PremiumTheme.fonts.sizes.section,
    fontWeight: PremiumTheme.fonts.weights.bold,
  },
  body: {
    fontFamily: PremiumTheme.fonts.family,
    fontSize: PremiumTheme.fonts.sizes.body,
    fontWeight: PremiumTheme.fonts.weights.regular,
    lineHeight: 24,
  },
  bodySemiBold: {
    fontFamily: PremiumTheme.fonts.family,
    fontSize: PremiumTheme.fonts.sizes.body,
    fontWeight: PremiumTheme.fonts.weights.semiBold,
    lineHeight: 24,
  },
  caption: {
    fontFamily: PremiumTheme.fonts.family,
    fontSize: PremiumTheme.fonts.sizes.caption,
    fontWeight: PremiumTheme.fonts.weights.medium,
  },
  link: {
    fontFamily: PremiumTheme.fonts.family,
    fontSize: PremiumTheme.fonts.sizes.body,
    fontWeight: PremiumTheme.fonts.weights.medium,
    color: '#6F86FF', // Using a primary color for links
    textDecorationLine: 'underline',
  },
});
