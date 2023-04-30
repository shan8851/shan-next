import { type FunctionComponent, type ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import ThemeProvider from './ThemeProvider';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
    </ThemeProvider>
  );
};
