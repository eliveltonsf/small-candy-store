/* eslint-disable import/no-unresolved */
import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.jpg';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0FFF8 url(${background});
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    --webkit-font-smoothing: antialiased;
  }

  body, input, body {
    font-family: 'Poppins', sans-serif;
  }

  #root {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
