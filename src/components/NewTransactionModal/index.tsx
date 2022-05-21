import Modal from 'react-modal'
import closeImg from '../../assets/fechar.svg'
import { Container } from './style';


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
        <input placeholder='Nome'></input>
        <input placeholder='Preço'></input>
        <input placeholder='Categoria'></input>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
    )
  }