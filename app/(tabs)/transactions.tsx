
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const transactions = [
  { id: '1', description: 'Groceries', amount: '-$50.00', date: '2024-07-22', category: 'Food' },
  { id: '2', description: 'Salary', amount: '+$2000.00', date: '2024-07-21', category: 'Income' },
  { id: '3', description: 'Rent', amount: '-$800.00', date: '2024-07-20', category: 'Housing' },
  { id: '4', description: 'Coffee', amount: '-$5.00', date: '2024-07-19', category: 'Food' },
  { id: '5', description: 'Netflix', amount: '-$15.00', date: '2024-07-18', category: 'Entertainment' },
  { id: '6', description: 'Gym Membership', amount: '-$40.00', date: '2024-07-17', category: 'Health' },
  { id: '7', description: 'Dinner with Friends', amount: '-$75.00', date: '2024-07-16', category: 'Social' },
];

export default function TransactionsScreen() {
  const router = useRouter();

  const handleTransactionPress = (item) => {
    router.push({
      pathname: '/modal',
      params: { ...item },
    });
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Transactions</ThemedText>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleTransactionPress(item)}>
            <ThemedView style={styles.transactionItem}>
              <ThemedView>
                <ThemedText style={styles.transactionDescription}>{item.description}</ThemedText>
                <ThemedText style={styles.transactionDate}>{item.date}</ThemedText>
              </ThemedView>
              <ThemedText style={item.amount.startsWith('-') ? styles.expense : styles.income}>
                {item.amount}
              </ThemedText>
            </ThemedView>
          </TouchableOpacity>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  transactionDescription: {
    fontSize: 16,
  },
  transactionDate: {
    fontSize: 12,
    color: '#64748B',
  },
  expense: {
    fontSize: 16,
    color: '#EF4444',
    fontWeight: 'bold',
  },
  income: {
    fontSize: 16,
    color: '#10B981',
    fontWeight: 'bold',
  },
});
