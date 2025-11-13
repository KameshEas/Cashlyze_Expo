import { Icon } from '@/components/Icon';
import { PremiumTheme } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: PremiumTheme.colors[colorScheme].text,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: PremiumTheme.colors[colorScheme].background,
          borderTopColor: PremiumTheme.colors[colorScheme].border,
          borderTopWidth: 1,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Icon name="Home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: 'Transactions',
          tabBarIcon: ({ color, size }) => <Icon name="ArrowRightLeft" size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="budgets"
        options={{
          title: 'Budgets',
          tabBarIcon: ({ color, size }) => <Icon name="PieChart" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <Icon name="User" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
