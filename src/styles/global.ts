import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #040F16;
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }

  body, input, button {
    font: 16px sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
