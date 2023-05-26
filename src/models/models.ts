export interface ITransactionRoot {
    total: number
    data: ITransaction[]
}

export interface ITransaction {
    _id: string
    amount: string
    type: string
    name: IFullName
    company: string
    email: string
    phone: string
    address: string
}

export interface IFullName {
    first: string
    last: string
}

export interface ITransactionsState {
    data: ITransactionRoot;
}