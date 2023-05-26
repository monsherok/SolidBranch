
import { ITransactionRoot, ITransactionsState } from '../../models/models';
import data from '../../data/transactions.json';
import { createSlice } from '@reduxjs/toolkit'

const initialState: ITransactionsState = {
    data: data as ITransactionRoot
}

export const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        total: (state: ITransactionsState) => {
            console.log(data.data.length)
        }
    },
})

export const { total } = transactionsSlice.actions

export default transactionsSlice.reducer