import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

// Placeholder Data
const userData = {
  name: 'Jessica',
  profileImage: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
};

const alerts = [
  {
    id: '1',
    type: 'Large transaction',
    details: '$450.00 at Best Buy',
    icon: 'exclamationmark.circle.fill',
    iconColor: '#FF6B6B',
  },
  {
    id: '2',
    type: 'Upcoming bill',
    details: 'Netflix is due tomorrow',
    icon: 'calendar',
    iconColor: '#6BDBFF',
  },
];

const spendingSummary = {
  total: '$1,250.75',
  percentageChange: '+5.2%',
  categories: [
    { name: 'Shopping', color: '#A682FF', percentage: 40 },
    { name: 'Food', color: '#FFC94D', percentage: 25 },
    { name: 'Bills', color: '#6BDBFF', percentage: 20 },
    { name: 'Other', color: '#FF6B6B', percentage: 15 },
  ],
};

const recentTransactions = [
  {
    id: '1',
    name: 'Best Buy',
    date: 'Today',
    amount: '-$450.00',
    icon: 'cart.fill',
    iconBg: '#1C2A44',
  },
  {
    id: '2',
    name: 'Starbucks',
    date: 'Yesterday',
    amount: '-$5.50',
    icon: 'cup.and.saucer.fill',
    iconBg: '#3A2C1C',
  },
  {
    id: '3',
    name: 'Paycheck',
    date: 'Sep 15, 2023',
    amount: '+$2,100.00',
    icon: 'arrow.up',
    iconBg: '#1A3A2F',
  },
];

const DARK_BLUE = '#0A192F';
const NAVY_BLUE = '#102A4C';
const LIGHT_BLUE = '#3A8DFF';
const TEXT_PRIMARY = '#FFFFFF';
const TEXT_SECONDARY = '#A8B2C3';
const BORDER_COLOR = '#1F3A5F';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <ThemedView style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              source={{ uri: userData.profileImage }}
              style={styles.profileImage}
            />
            <ThemedText type="title" style={styles.headerText}>Hello, {userData.name}!</ThemedText>
          </View>
          <IconSymbol name="bell.fill" size={24} color={TEXT_SECONDARY} />
        </ThemedView>

        {/* Alerts */}
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Your Alerts</ThemedText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.alertsContainer}>
            {alerts.map((alert) => (
              <ThemedView key={alert.id} style={styles.alertCard}>
                <View style={styles.alertHeader}>
                  <ThemedText style={styles.alertType}>{alert.type}</ThemedText>
                  <IconSymbol name={alert.icon as any} size={20} color={alert.iconColor} />
                </View>
                <ThemedText style={styles.alertDetails}>{alert.details}</ThemedText>
                <TouchableOpacity style={styles.alertButton}>
                  <ThemedText style={styles.alertButtonText}>View Details</ThemedText>
                </TouchableOpacity>
              </ThemedView>
            ))}
          </ScrollView>
        </ThemedView>

        {/* Dashboard */}
        <ThemedView style={styles.section}>
          <View style={styles.sectionHeader}>
            <ThemedText type="subtitle" style={styles.sectionTitle}>My Dashboard</ThemedText>
            <ThemedText type="link" style={styles.customizeText}>Customize</ThemedText>
          </View>

          {/* Spending Summary */}
          <ThemedView style={styles.dashboardCard}>
            <ThemedText style={styles.cardTitle}>Spending Summary</ThemedText>
            <View style={styles.summaryAmountContainer}>
              <ThemedText style={styles.summaryAmount}>{spendingSummary.total}</ThemedText>
              <ThemedText style={styles.summaryPercentage}>{spendingSummary.percentageChange}</ThemedText>
            </View>

            {/* Progress Bar */}
            <View style={styles.progressBarContainer}>
              {spendingSummary.categories.map((cat, index) => (
                <View
                  key={index}
                  style={{
                    backgroundColor: cat.color,
                    width: `${cat.percentage}%`,
                    height: 8,
                  }}
                />
              ))}
            </View>

            {/* Category Legend */}
            <View style={styles.legendContainer}>
              {spendingSummary.categories.map((cat, index) => (
                <View key={index} style={styles.legendItem}>
                  <View style={[styles.legendIndicator, { backgroundColor: cat.color }]} />
                  <ThemedText style={styles.legendText}>{cat.name}</ThemedText>
                </View>
              ))}
            </View>
          </ThemedView>
        </ThemedView>

        {/* Recent Transactions */}
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Recent Transactions</ThemedText>
          <ThemedView style={styles.transactionsCard}>
            {recentTransactions.map((tx, index) => (
              <View key={tx.id} style={[styles.transactionItem, index < recentTransactions.length - 1 && styles.transactionDivider]}>
                <View style={styles.transactionLeft}>
                  <View style={[styles.transactionIcon, { backgroundColor: tx.iconBg }]}>
                    <IconSymbol name={tx.icon as any} size={20} color={TEXT_PRIMARY} />
                  </View>
                  <View>
                    <ThemedText style={styles.transactionName}>{tx.name}</ThemedText>
                    <ThemedText style={styles.transactionDate}>{tx.date}</ThemedText>
                  </View>
                </View>
                <ThemedText style={[styles.transactionAmount, { color: tx.amount.startsWith('-') ? TEXT_PRIMARY : '#4CAF50' }]}>
                  {tx.amount}
                </ThemedText>
              </View>
            ))}
          </ThemedView>
        </ThemedView>
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab}>
        <IconSymbol name="plus" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_BLUE,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: 'transparent',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: TEXT_PRIMARY,
  },
  section: {
    marginBottom: 24,
    backgroundColor: 'transparent',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: TEXT_PRIMARY,
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  customizeText: {
    color: LIGHT_BLUE,
    fontWeight: '600',
  },
  alertsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  alertCard: {
    width: 280,
    padding: 16,
    borderRadius: 12,
    backgroundColor: NAVY_BLUE,
    marginRight: 16,
  },
  alertHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  alertType: {
    color: TEXT_PRIMARY,
    fontWeight: '600',
  },
  alertDetails: {
    color: TEXT_SECONDARY,
  },
  alertButton: {
    marginTop: 16,
  },
  alertButtonText: {
    color: LIGHT_BLUE,
    fontWeight: '600',
  },
  dashboardCard: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: NAVY_BLUE,
  },
  cardTitle: {
    color: TEXT_SECONDARY,
    marginBottom: 8,
  },
  summaryAmountContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 8,
    gap: 8,
  },
  summaryAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: TEXT_PRIMARY,
  },
  summaryPercentage: {
    color: '#4CAF50',
    fontWeight: '600',
    marginBottom: 4,
  },
  progressBarContainer: {
    flexDirection: 'row',
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
    marginVertical: 16,
    backgroundColor: BORDER_COLOR,
  },
  legendContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    gap: 8,
    marginBottom: 8,
  },
  legendIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  legendText: {
    color: TEXT_SECONDARY,
  },
  transactionsCard: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: NAVY_BLUE,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  transactionDivider: {
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionName: {
    color: TEXT_PRIMARY,
    fontWeight: '600',
  },
  transactionDate: {
    color: TEXT_SECONDARY,
  },
  transactionAmount: {
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: LIGHT_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
});
