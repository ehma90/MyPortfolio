import { ReactNode } from 'react';
import Head from 'next/head';
import { FC } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Emmanuel E. Essien</title>
        <meta name="description" content="Emmanule E. Essien's portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar/>
        {children}
      </main>
    </>
  );
};

export default Layout;