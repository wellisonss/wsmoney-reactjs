import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";


interface Transaction{
  id: number,
  title: string,
  value: number,
  type: string,
  category: string,
  createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps{
  children: ReactNode,
}

interface TransactionContextData{
  transactions: Transaction[],
  createTransaction: (Transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
  );

export function TransactionsProvider({ children } : TransactionsProviderProps) {
  const [ transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(()=>{
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, []);

  function createTransaction(transactions: TransactionInput){

    api.post('/transactions', transactions);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )

}