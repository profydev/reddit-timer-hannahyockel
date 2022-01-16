import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Montserrat";
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Montserrat";
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Montserrat";
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Montserrat";
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Bitter";
  }

  body {
    font-family: ${(props) => props.theme.font.family.default};
    font-size: ${(props) => props.theme.font.size.default};
    line-height: ${(props) => props.theme.font.lineHeight.default};
    color: ${(props) => props.theme.color.text};
  }
  }
`;

export default GlobalStyle;
