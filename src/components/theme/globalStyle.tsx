import React from "react";
import {createGlobalStyle} from "styled-components";

const darkTheme = {
    backgroundColor: '#24252A',
    headerBackground: '#131313',
    fontColor: '#fefefe'
}

const lightTheme = {
    backgroundColor: '#fefefe',
    headerBackground: '#fef2f3',
    fontColor: '#24252A'
}

const Global = createGlobalStyle`
  body {
    background-color: ${props => props.theme.mode === 'dark' ? darkTheme.backgroundColor : lightTheme.backgroundColor};
    color: ${props => props.theme.mode === 'dark' ? darkTheme.fontColor : lightTheme.fontColor}
  }

  .header {
    background-color: ${props => props.theme.mode === 'dark' ? darkTheme.headerBackground : lightTheme.headerBackground };
    color: ${props => props.theme.mode === 'dark' ? darkTheme.fontColor : lightTheme.fontColor}
  }

  span.date_field {
    color: ${props => props.theme.mode === 'dark' ? darkTheme.fontColor : lightTheme.fontColor}
  }

  input {
    border-color: ${props => props.theme.mode === 'dark' ? darkTheme.fontColor : lightTheme.fontColor}
  }

  .header nav ul li a:hover {
    background-color: ${props => props.theme.mode === 'dark' ? darkTheme.fontColor : lightTheme.fontColor};
    color: ${props => props.theme.mode === 'light' ? darkTheme.fontColor : lightTheme.fontColor};
  }

  .header nav ul li a.active {
    border-bottom:1px solid  ${props => props.theme.mode === 'dark' ? darkTheme.fontColor : lightTheme.fontColor};
  }
`

export const GlobalStyle: React.FC = () => {
    return <Global />
}