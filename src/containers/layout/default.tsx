import React from 'react';
import Head from '../ui/head';
import Footer from '../ui/footer';
import { useRouter } from 'next/router';
import Header from '../ui/header';

const Layout = (props: any): JSX.Element => {
  const router = useRouter();
  return (
    <React.Fragment>
      <Head
        title={props.title}
        description={props.description}
        canonical={props.canonical || router.asPath}
        keywords={props.keywords}
        author={props.author}
        type={props.type}
        thumbnail={props.thumbnail}
        rating={props.rating}
        view={props.view}
        dateModified={props.dateModified}
        datePublished={props.datePublished}
      />
      {router.route !== '/' && <Header />}
      <main>{props.children}</main>
      {!router.route.includes('landing') && <Footer />}
    </React.Fragment>
  );
};

export default Layout;
