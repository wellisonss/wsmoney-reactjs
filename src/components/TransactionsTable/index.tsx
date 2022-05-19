import { useEffect } from "react"
import { api } from "../../services/api";
import { Container } from "./style"


export function TransactionTable(){
  useEffect(()=>{
    api.get('transactions')
    .then(response => console.log(response.data))
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
            <tr>
              <td>Camisa</td>
              <td className="withdraw">-10.00</td>
              <td>Compra</td>
              <td>10/10/2022</td>
            </tr>
            <tr>
              <td>Camisa</td>
              <td className="deposit">10.00</td>
              <td>Venda</td>
              <td>10/10/2022</td>
            </tr>
          </tbody>
      </table>
    </Container>
  )
}