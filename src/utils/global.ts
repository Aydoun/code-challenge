import { createGlobalStyle } from 'styled-components';

type TTheme = {
  body: string
  text: string
}

export const GlobalStyles = createGlobalStyle<{ theme: TTheme }>`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    margin: 20px 7%;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  .assets__table-header {
    background: #e8e8e8;
  }
`;
