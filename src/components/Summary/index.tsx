import entradasImg from '../../assets/entradas.svg'
import saidasImg from '../../assets/saidas.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./style";

export function Summary(){

  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {

    transaction.type === 'deposit' ?  acc.total += transaction.value : acc.total -= transaction.value;
    transaction.type === 'deposit' ?  acc.entrada += transaction.value : acc.saida += transaction.value;

    return acc;
  }, {
    entrada: 0,
    saida: 0,
    total: 0
  }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradasImg} alt="Entradas" />
        </header>
        <strong>{
                    new Intl.NumberFormat('pt-BR',{
                      style: 'currency',
                      currency: 'BRl',
                    }).format(summary.entrada)
                  }</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={saidasImg} alt="Saídas" />
        </header>
        <strong>{
                    new Intl.NumberFormat('pt-BR',{
                      style: 'currency',
                      currency: 'BRl',
                    }).format(summary.saida)
                  }</strong>
      </div>
      <div className='background-total'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{
                    new Intl.NumberFormat('pt-BR',{
                      style: 'currency',
                      currency: 'BRl',
                    }).format(summary.total)
                  }</strong>
      </div>
    </Container>
  )
}