// External imports
import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { Route, Switch } from 'react-router-dom';

// Global sass import
import './styles/style.scss';

// Local Imports
import Header from './components/header/Header';
import { Chat } from './components/pages/Chat';
import Settings from './components/pages/Settings';
import { GlobalStyle } from './components/theme/globalStyle';

const getDefaultTheme = () => {
  return localStorage.getItem('theme') || 'light';
}

const themes: DefaultTheme = {
  mode: getDefaultTheme()
}

const App: React.FC = () => {
  const [theme, setThemes] = useState(themes);

  const toggleTheme = () => {
    if(theme.mode === 'dark') {
      setThemes({ mode: 'light'})
      localStorage.setItem('theme', 'light');
    } else {
      setThemes({ mode: 'dark'})
      localStorage.setItem('theme', 'dark');
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Switch>
          <Route path="/" exact component={ Chat } />
          <Route path="/settings" component={ Settings } />
          <Route path="/chat" component={ Chat } />
        </Switch>
    </ThemeProvider>
  );
}

export default App;
