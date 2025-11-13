
export const Colors = {
  light: {
    text: '#111827',
    background: '#F9FAFB',
    tint: '#0A7EA4',
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: '#0A7EA4',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: '#FFFFFF',
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: '#FFFFFF',
  },
};

export const PremiumTheme = {
  // 4.1 Global Color System
  colors: {
    primaryGradient: ['#6F86FF', '#A67DFF'],
    light: {
      text: '#111827',
      background: '#F0F4F8', // Softer background
      surface: '#FFFFFF',
      surface2: '#F8F9FA',
      border: '#E5E7EB',
      icon: '#475569',
    },
    dark: {
      text: '#F0F4F8',
      background: '#0D1117',
      surface: '#161B22',
      surface2: '#21262D',
      border: '#30363D',
      icon: '#A5B4FC',
    },
  },

  // 4.3 Premium Font Pairing
  fonts: {
    family: 'Inter', // Using Inter as the premium font
    weights: {
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
    },
    sizes: {
      title: 28,
      section: 18,
      body: 16,
      caption: 12,
    },
  },

  // 4.2 Consistent Shadows
  shadows: {
    soft: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.05,
      shadowRadius: 12,
      elevation: 3,
    },
    medium: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.1,
      shadowRadius: 16,
      elevation: 6,
    },
  },

  // 1.3 Spacing Rhythm
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
};
