import { createGlobalStyle } from 'styled-components';

export const GlocalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --green: #33CC95;
    --blue: #74C5C0;
    --blue-light: #ADD8D4;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #FFFFFF;
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  // font-size: 16px (Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px){
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button { //colocar a fonte em todos td por padrão eles nao importam do body
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
   h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
   }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .overlay-react-modal{
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content-react-modal{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    border-radius: 0.25rem;
    padding: 3rem;
    position: relative;
  }
`