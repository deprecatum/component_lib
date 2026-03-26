import React from 'react';
import {Theme} from './index';

const ThemeContext = React.createContext(Theme.gray);

interface themeProviderProps {
  theme?: CSSModule,
  children: React.ReactNode,
}

export const ThemeProvider = ({theme, children}: themeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}
