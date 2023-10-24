import { ReactNode } from "react";
import Head from "next/head";
import { FC } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

const Layout: FC<LayoutProps> = ({ children, title, description }) => {
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="flex flex-col justify-between h-screen  items-center">
        <div>
          <Navbar />
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
