import { ReactNode } from "react";
import Head from "next/head";
import { FC } from "react";

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
          {title
            ? `${title} | Emmanuel Essien - Frontend Engineer`
            : `Emmanuel Essien - Frontend Engineer`}
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
        <div className="bg-[#080603] text-white">{children}</div>
      </main>
    </>
  );
};

export default Layout;
