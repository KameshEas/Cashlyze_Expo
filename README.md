# Cashlyze: Know Where Your Money Flows

Cashlyze is a mobile-first personal finance application built with Expo and React Native. It helps you track your income and expenses, visualize your spending habits, and stay on top of your financial health.

## Features

- **Dashboard:** Get a quick overview of your spending summary, including total expenses and percentage changes.
- **Dynamic Alerts:** Receive notifications for large transactions and upcoming bills to stay informed.
- **Recent Transactions:** View a detailed list of your most recent financial activities.
- **Spending Insights:** Understand your spending habits with a categorized breakdown and visual charts.
- **Secure Authentication:** User authentication flow for signing up and logging in.
- **Cross-Platform:** Runs on Android, iOS, and the web, thanks to Expo.

## Tech Stack

- **Framework:** React Native with Expo
- **Routing:** Expo Router (file-based routing)
- **UI Components:** Custom-themed components, `react-native-chart-kit` for data visualization.
- **Language:** TypeScript

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js and npm
- An Android/iOS emulator or a physical device with the Expo Go app.

### Installation & Running the App

1.  **Install NPM packages:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npx expo start
    ```

This will open the Expo development server. You can then:
- Press `a` to open the app in an Android emulator.
- Press `i` to open the app in an iOS simulator.
- Press `w` to open the app in a web browser.
- Scan the QR code with the Expo Go app on your physical device.

## Project Structure

- **/app:** Contains all the screens and routes for the application.
  - **(tabs):** Defines the main tab navigation (Overview, Payments, Reports, Account).
  - **(auth):** Contains the authentication screens (Login, Sign Up).
  - **_layout.tsx:** The root layout for the app.
- **/components:** Reusable UI components used throughout the app.
- **/constants:** Theme, colors, and other constant values.
- **/assets:** Images, fonts, and other static assets.
