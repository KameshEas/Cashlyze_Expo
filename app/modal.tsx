
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const categoryDetails = {
  Groceries: { icon: '🛒', color: '#4CAF50' },
  Salary: { icon: '💰', color: '#2E7D32' },
  Rent: { icon: '🏠', color: '#C62828' },
  Coffee: { icon: '☕', color: '#6D4C41' },
  Entertainment: { icon: '🎬', color: '#6A1B9A' },
  Utilities: { icon: '💡', color: '#F57F17' },
  Transport: { icon: '🚗', color: '#0277BD' },
  default: { icon: '🧾', color: '#546E7A' },
};

export default function TransactionDetailScreen() {
  const { amount, category, date, description } = useLocalSearchParams();
  const details = categoryDetails[category as string] || categoryDetails.default;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        {/* Handle for sheet-style modal appearance */}
        <View style={styles.handle} />

        {/* Amount */}
        <ThemedText style={styles.amount}>${amount}</ThemedText>

        <View style={styles.divider} />

        {/* Category */}
        <ThemedView style={styles.detailItem}>
          <ThemedText style={styles.detailLabel}>Category</ThemedText>
          <ThemedView style={styles.categoryValueContainer}>
            <ThemedText style={[styles.categoryIcon, { backgroundColor: details.color }]}>{details.icon}</ThemedText>
            <ThemedText style={styles.detailValue}>{category}</ThemedText>
          </ThemedView>
        </ThemedView>

        {/* Date */}
        <ThemedView style={styles.detailItem}>
          <ThemedText style={styles.detailLabel}>Date</ThemedText>
          <ThemedText style={styles.detailValue}>{date}</ThemedText>
        </ThemedView>

        <View style={styles.divider} />

        {/* Description/Notes */}
        <ThemedView style={styles.notesCard}>
          <ThemedText style={styles.notesTitle}>Notes</ThemedText>
          <ThemedText style={styles.notesText}>{description}</ThemedText>
        </ThemedView>

      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#F3F4F6',
    paddingTop: 12,
    paddingBottom: 32,
    paddingHorizontal: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  handle: {
    width: 48,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D1D5DB',
    alignSelf: 'center',
    marginBottom: 16,
  },
  amount: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#111827',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 20,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  detailLabel: {
    fontSize: 16,
    color: '#6B7280',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  categoryValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  categoryIcon: {
    fontSize: 16,
    padding: 8,
    borderRadius: 20,
    color: '#FFFFFF',
    overflow: 'hidden',
    textAlign: 'center',
  },
  notesCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
  },
  notesTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 8,
  },
  notesText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
});
