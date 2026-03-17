import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // body {
  //   background: ${({ theme }) => theme.body};
  //   color: ${({ theme }) => theme.text};
  //   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  //   transition: all 0.25s linear;
  // } 
  
  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  section {
    padding: 80px 0;
  }

  .section-title {
    font-size: 2.5rem;
    margin-bottom: 40px;
    text-align: center;
    position: relative;
    color: ${({ theme }) => theme.primary};

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background: ${({ theme }) => theme.secondary};
    }
  }
`;
