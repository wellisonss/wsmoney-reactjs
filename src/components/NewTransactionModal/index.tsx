import Modal from 'react-modal'
import closeImg from '../../assets/fechar.svg'
import entradaImg from '../../assets/entradas.svg'
import saidaImg from '../../assets/saidas.svg'
import { Container, TransationsModalButton, ContainerButtonModal } from './style';
import { useState } from 'react';


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal ({ isOpen, onRequestClose }:NewTransactionModalProps){

  const [type, setType ] = useState('deposit');

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
          <ContainerButtonModal
          type='button'
          onClick={() => { setType('deposit'); }}
          isActive={ type === 'deposit'}
          >            
            <img src={entradaImg} alt="Entrada"/>
            <span>Entrada</span>
          </ContainerButtonModal>

          <ContainerButtonModal
          type='button'
          onClick={() => { setType('withdraw'); }}
          isActive={ type === 'withdraw'}
          >            
            <img src={saidaImg} alt="Saida"/>
            <span>Saida</span>
          </ContainerButtonModal>
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