import React from 'react';
import { icons } from 'lucide-react-native';
import { StyleProp, ViewStyle } from 'react-native';

type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const Icon = ({ name, size = 24, color = '#FFFFFF', style }: IconProps) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon size={size} color={color} style={style} />;
};

export { Icon, type IconName };
