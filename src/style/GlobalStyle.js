import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /** Montserrat Regular **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 400;
    font-style: normal;
  }

  /** Montserrat Medium **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 500;
    font-style: normal;
  }

  /** Montserrat SemiBold **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 600;
    font-style: normal;
  }

  /** Montserrat Bold **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Bitter";
  }

  body {
    font-size: 12px;
  }
`;

export default GlobalStyle;
