import React from 'react';
import {Home} from './src/Pages/Home';
import {ThemeProvider} from 'styled-components/native';
import {Theme} from './src/Style/theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
