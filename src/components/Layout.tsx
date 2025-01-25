import { ReactNode } from "react";
import Head from "next/head";
import { FC } from "react";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout: FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} | Emmanuel Essien - FullStack developer`
            : `Emmanuel Essien - FullStack developer `}
        </title>
        <meta
          name="description"
          content={
            description ? description : `Emmanuel Essien's portfolio website`
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="lg:h-screen h-full">{children}</div>
      </main>
    </>
  );
};

export default Layout;
