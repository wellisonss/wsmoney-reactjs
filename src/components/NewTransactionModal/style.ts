import styled from "styled-components";

export const Container = styled.form`

h2 {
  color: var(--text-title);
  font-size: 1.5rem;
  margin-bottom: 1.2rem;
}

input {
  width: 100%;
  padding: 0 1.5rem;
  height: 3rem;
  border-radius: 0.25rem;
  
  border: 1px solid #d7d7d7;
  background-color: #E7E9EE;
  
  font-weight: 400;
  font-size: 1rem;
  
  
  &::placeholder {  //seletor placeholder
    color: var(--text-body);
  } 
  
  & + input { // todo input que tiver um input antes dele, vai receber um marquin top
    margin-top: 1rem;
  }
}

button[type="submit"] {
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  background: var(--green);
  color: #FFF;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  font-weight: 600;
  
  transition: filter 0.2s;
  
  &:hover {
    filter: brightness(0.9);
  }
}
`;

export const TransationsModalButton = styled.div`
margin: 1rem 0;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0.25rem;

`;

interface ContainerButtonModalProps{
  isActive: boolean;
}

export const ContainerButtonModal = styled.button<ContainerButtonModalProps>`

    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${(props) => props.isActive ? '#FFF' : 'transparent'};


    display: flex;
    align-items: center;
    justify-content: center;


    transition: border-color 0.5s;

    &:hover{
      border-color: #AAA;
    }

    img {
      height: 20px;
      width: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title);
    }


`;
