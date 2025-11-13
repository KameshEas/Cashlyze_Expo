
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const budgets = [
  { id: '1', name: 'Groceries', amount: 500, spent: 250 },
  { id: '2', name: 'Entertainment', amount: 200, spent: 150 },
  { id: '3', name: 'Utilities', amount: 150, spent: 100 },
  { id: '4', name: 'Transport', amount: 100, spent: 50 },
];

export default function BudgetsScreen() {
  const router = useRouter();

  const handleBudgetPress = (item) => {
    router.push({
      pathname: '/budget-modal',
      params: { ...item },
    });
  };

  const renderBudget = ({ item }) => (
    <TouchableOpacity onPress={() => handleBudgetPress(item)}>
      <ThemedView style={styles.budgetItem}>
        <ThemedView style={styles.budgetInfo}>
          <ThemedText style={styles.budgetName}>{item.name}</ThemedText>
          <ThemedText style={styles.budgetAmount}>${item.spent} / ${item.amount}</ThemedText>
        </ThemedView>
        <ThemedView style={styles.progressBarContainer}>
          <ThemedView style={[styles.progressBar, { width: `${(item.spent / item.amount) * 100}%` }]} />
        </ThemedView>
      </ThemedView>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText style={styles.title}>Your Budgets</ThemedText>
        <TouchableOpacity style={styles.addButton} onPress={() => router.push('/budget-modal')}>
          <ThemedText style={styles.addButtonText}>Add New</ThemedText>
        </TouchableOpacity>
      </ThemedView>
      <FlatList
        data={budgets}
        renderItem={renderBudget}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F0F4F8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  addButton: {
    backgroundColor: '#2A9D8F',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingBottom: 24,
  },
  budgetItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  budgetInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  budgetName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  budgetAmount: {
    fontSize: 16,
    color: '#475569',
  },
  progressBarContainer: {
    height: 12,
    backgroundColor: '#E2E8F0',
    borderRadius: 6,
  },
  progressBar: {
    height: 12,
    backgroundColor: '#2A9D8F',
    borderRadius: 6,
  },
});
