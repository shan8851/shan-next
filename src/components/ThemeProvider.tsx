// ThemeProvider.tsx
import React, { ReactNode, useEffect } from 'react';
import {useStore} from '@/lib/store';

interface Props {
  children: ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const setTheme = useStore((state) => state.setTheme);
  const theme = useStore((state) => state.theme);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;
