import React, { useContext } from 'react';
import { Themes } from './index';

type ThemeType = Record<string, string>;

const ThemeContext = React.createContext<ThemeType>(Themes.lightBlue);

interface ThemeProviderProps {
  theme?: ThemeType;
  children: React.ReactNode;
}

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  console.log('Loaded theme');
  let contextTheme = useContext(ThemeContext);
  contextTheme = theme ? theme : contextTheme;
  return (
    <ThemeContext.Provider value={contextTheme}>
      <div id="theme" className={contextTheme.body}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
