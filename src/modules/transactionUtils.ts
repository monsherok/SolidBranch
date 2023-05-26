import { ITransaction } from '../models/models';

export const getTypeCounts = (transactions: ITransaction[]): { [type: string]: number } => {
  const typeCounts: { [type: string]: number } = {};

  transactions.forEach(transaction => {
    const count = typeCounts[transaction.type] || 0;
    typeCounts[transaction.type] = count + 1;
  });

  return typeCounts;
};