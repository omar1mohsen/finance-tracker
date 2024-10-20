# Transaction Management Application

## Overview

This project is a **Transaction Management Application** that allows users to track their income and expenses efficiently. It provides a user-friendly interface to add, edit, and delete transactions, and view an overall summary of finances through data visualization.

The application is built using **React** with **Redux** for state management, and **Ant Design** for UI components. Additionally, **ECharts** is used for rendering interactive financial charts.

## Key Features

### 1. Add, Edit, and Delete Transactions
- Users can easily add a new transaction with details like **type** (income/expense), **amount**, **category**, **date**, and **description**.
- Each transaction can be edited or deleted as needed.
- All transactions are stored locally using **localStorage** for persistence.

### 2. Transaction List with Sorting and Filtering
- The application displays a detailed list of all transactions.
- Transactions can be sorted and filtered by **type** and **date**.
- Each transaction in the list comes with options to edit or delete.

### 3. Summary View with Charts
- A summary view displays the total **income** and **expenses**.
- **ECharts** is used to display expenses categorized by type in a pie chart, helping users understand where their money is going.

### 4. Local Storage for Data Persistence
- The application stores all transactions in **localStorage**, ensuring that data persists even when the page is refreshed.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/omar1mohsen/finance-tracker.git
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm run dev
   ```

## Key Libraries and Tools
- **React**: Used for building the user interface.
- **Redux**: Manages the global state of transactions.
- **Ant Design**: Provides a pre-built component library for UI.
- **ECharts**: Visualizes the financial data with pie charts.
- **TypeScript**: Adds type safety to the application.
- **localStorage**: Stores the transaction data on the client side.

## Develop Full Transaction List with Sorting, Filtering, and Edit/Delete Functionality

Time Taken: 3 hours
This task involved building the TransactionList component, including sorting and filtering functionality. Features to edit and delete transactions were also implemented, along with integrating the Redux store to ensure that changes are reflected in localStorage.