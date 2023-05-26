import { configureStore, combineReducers } from "@reduxjs/toolkit"
import  transactionsSlice  from './slices/transactionsSlice';

export const store = configureStore({
    reducer: {
        transactions: transactionsSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
