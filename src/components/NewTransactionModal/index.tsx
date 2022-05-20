import Modal from 'react-modal'
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