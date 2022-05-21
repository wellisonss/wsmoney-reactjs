import Modal from 'react-modal'
import closeImg from '../../assets/fechar.svg'
import { Container, TransationsModalButton } from './style';
import entradaImg from '../../assets/entradas.svg'
import saidaImg from '../../assets/saidas.svg'


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal ({ isOpen, onRequestClose }:NewTransactionModalProps){
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="overlay-react-modal"
      className="content-react-modal"
      >
      <button 
        type='button' onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="botao fechar modal" />
      </button>
      
      <Container>
        <h2>Cadastrar transação</h2>

        <input 
          type="number"
          placeholder='Nome'
        />

        <input
        placeholder='Preço'
        />

        <TransationsModalButton>
          <button
          type='button'><img src={entradaImg} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button
          type='button'><img src={saidaImg} alt="Saida" />
            <span>Saida</span>
          </button>
        </TransationsModalButton>

        <input
        placeholder='Categoria'
        />

        <button
          type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
    )
  }