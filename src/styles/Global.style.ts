import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  li{
    list-style: none;
  }
  
  a{
    text-decoration: none;
  }
  
  button{
    background-color: unset;
    border: none;
    cursor: pointer;
  }
  
  section{
    background-color: #F7F6FB;
  }
  
  h2{
    font-size: 20px;
    font-weight: 500;
  }
`