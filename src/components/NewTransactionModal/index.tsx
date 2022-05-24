import Modal from 'react-modal'
import closeImg from '../../assets/fechar.svg'
import entradaImg from '../../assets/entradas.svg'
import saidaImg from '../../assets/saidas.svg'
import { Container, TransationsModalButton, ContainerButtonModal } from './style';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal ({ isOpen, onRequestClose }:NewTransactionModalProps){
  
  const [title, setTitle ] = useState('');
  const [value, setValue ] = useState(0);
  const [category, setCategory ] = useState('');
  const [type, setType ] = useState('deposit');
  
function handleCreateNewTransation(event: FormEvent) {
    event.preventDefault();
    
    const data = {
      title,
      value,
      category,
      type
    };

    api.post('/transactions', data)

  }
  
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="overlay-react-modal"
      className="content-react-modal"
    >
      <button 
        type='button' 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="botao fechar modal" />
      </button>
      
      <Container onSubmit={handleCreateNewTransation}>  
        <h2>Cadastrar transação</h2>
        
        <input
          placeholder='Nome'
          value={title} // salvar valor do title 
          onChange={event => setTitle(event.target.value)} // qualquer todas as vezes que o valor do campo for modificado
        />
        
        <input 
          type="number"
          placeholder='Preço'
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />
        
          <TransationsModalButton>
            <ContainerButtonModal
            type='button'
            onClick={() => { setType('deposit'); }} // marcar como deposit ao clicar no botao
            isActive={ type === 'deposit'} // guardar caso o botao estiver ativado 
            colorActive="green" // setar cor 
            >            
            <img src={entradaImg} alt="Entrada"/>
            <span>Entrada</span>
            </ContainerButtonModal>
            
            <ContainerButtonModal
            type='button'
            onClick={() => { setType('withdraw'); }}
            isActive={ type === 'withdraw'}
            colorActive="red"
            >            
            <img src={saidaImg} alt="Saida"/>
            <span>Saida</span>
            </ContainerButtonModal>
          </TransationsModalButton>
        
        <input
          placeholder='Categoria'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        
        <button
          type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
    )
  }