// src/store/transactionSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Transaction } from 'types';

interface TransactionState {
  transactions: Transaction[];
}

const localTrans = JSON.parse(localStorage.getItem('transactions') || '[]');

const initialState: TransactionState = {
  transactions: localTrans,
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push({...action.payload,id:state.transactions.length + 1});
      localStorage.setItem('transactions', JSON.stringify(state.transactions));
    },
    editTransaction: (state, action: PayloadAction<Transaction>) => {
      const index = state.transactions.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.transactions[index] = action.payload;
        localStorage.setItem('transactions', JSON.stringify(state.transactions));
      }
    },
    removeTransaction: (state, action: PayloadAction<number>) => {
      state.transactions = state.transactions.filter(t =>{
        console.log('trans',t ,'payload',action);
        return t.id !== +action.payload
      } );
      localStorage.setItem('transactions', JSON.stringify(state.transactions));
    },
  },
});

export const { addTransaction, editTransaction, removeTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
