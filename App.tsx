import React from 'react';
import {Home} from './src/pages/Home';
import {ThemeProvider} from 'styled-components/native';
import {Theme} from './src/styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
