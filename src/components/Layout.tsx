import { ReactNode } from "react";
import Head from "next/head";
import { FC } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  showNavbar?: boolean
  footer?: boolean
}

const Layout: FC<LayoutProps> = ({ children, title, description, showNavbar, footer }) => {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} | Emmanuel E. Essien` : `Emmanuel E. Essien`}
        </title>
        <meta
          name="description"
          content={
            description ? description : `Emmanule E. Essien's portfolio website`
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-between h-screen  items-center">
        <div>
          { showNavbar ? '' : <Navbar />}
          {children}
        </div>
       {footer ? `` :  <Footer />}
      </main>
    </>
  );
};

export default Layout;
