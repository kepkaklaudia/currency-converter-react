import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Inconsolata', monospace;
    background-image: url("https://phonoteka.org/uploads/posts/2022-02/thumbs/1645198886_3-phonoteka-org-p-fon-dengi-moneti-3.jpg");
    background-color: ${({theme}) => theme.color.moon};
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    min-height: 100%;
  }
`;