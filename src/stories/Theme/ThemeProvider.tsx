import React, { useContext } from 'react';
import styles from './themes/blue/theme_light.module.css';
/*
type ThemeType = Record<string, string>;

const ThemeContext = React.createContext<CSSModule>(styles.blueLight);

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
*/