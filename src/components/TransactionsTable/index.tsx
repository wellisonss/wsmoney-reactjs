import { useEffect, useState } from "react"
import { api } from "../../services/api";
import { Container } from "./style"

interface Transaction{
  id: number,
  title: string,
  value: number,
  type: string,
  category: string,
  createdAt: string
}


export function TransactionTable(){

  const [ transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(()=>{
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, []);

  return (
    <Container>
      <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            {
              transactions.map(transaction => (
              <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}> 
                {
                  new Intl.NumberFormat('pt-BR',{
                    style: 'currency',
                    currency: 'BRl',
                  }).format(transaction.value)
                }
              </td>
              <td>{transaction.category}</td>
              <td>
                {
                  new Intl.DateTimeFormat('pt-BR').format(
                    new Date(transaction.createdAt)
                  )
                }
              </td>
            </tr>
              ))
            }
          </tbody>
      </table>
    </Container>
  )
}