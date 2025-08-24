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
            ? `${title} | Emmanuel Essien - FullStack Developer`
            : `Emmanuel Essien - FullStack Developer`}
        </title>
        <meta
          name="description"
          content={
            description ? description : `Emmanuel Essien's portfolio website`
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta
          name="keywords"
          content="FullStack Developer, Security Analyst, React, Next.js, Node.js, Emmanuel Essien"
        />
        <meta name="author" content="Emmanuel Essien" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Emmanuel Essien - FullStack Developer"
        />
        <meta
          property="og:description"
          content="Professional FullStack Developer & Security Analyst specializing in modern web applications"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta property="og:image" content="/assets/emmanuel.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Emmanuel Essien - FullStack Developer"
        />
        <meta
          name="twitter:description"
          content="Professional FullStack Developer & Security Analyst"
        />
        <meta name="twitter:image" content="/assets/emmanuel.jpg" />
      </Head>
      <main className="min-h-screen bg-background">{children}</main>
    </>
  );
};

export default Layout;
