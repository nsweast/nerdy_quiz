import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    width: 95%;
    margin: 0 auto;
    font-family: 'Raleway', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    width: 100%;
    background: linear-gradient(90deg, rgba(136,96,208,0.37) 30%, rgba(132,206,235,0.65) 80%);
  }
  
`;
