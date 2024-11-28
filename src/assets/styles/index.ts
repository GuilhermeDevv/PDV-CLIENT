'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  color:black;
  font-weight: 500;
  text-decoration-line: none;
  user-select: none !important;
}

html{
    font-size:62.5%;
    scroll-behavior:smooth;
}
img{
  max-width: 100%;
  display: block;
}

body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px;
        background-color: ${props => props.theme.backgroundSecundary};
        width: 100svw;
        height: 100svh;
        scroll-behavior:smooth;
        padding-right: 0px !important;
        user-select: none !important;
}
`;

export default GlobalStyle;
