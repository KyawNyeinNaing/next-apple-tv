import { createGlobalStyle } from 'styled-components';
import { font } from './Fonts';
import { ColorType, FontType } from '@/types/Constant';

type Global = {
  theme: ColorType & FontType;
};

export const GlobalStyle = createGlobalStyle<Global>`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }
      
  html {
    scroll-behavior: smooth;
  }

  html,
  body {
    font-family: -apple-system, SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif !important;
    font-style: normal;
    font-feature-settings: 'palt';
    color: inherit;
    font-size: ${font.fontSize.md}px;
    margin: 0;
    padding: 0;
    display: block;
    background: ${({ theme }) => theme.white};
    a {
      color: inherit;
      text-decoration: inherit;
    }
  }
`;
