import React from 'react';
import Header from '../ui/head';
import Footer from '../ui/footer';
import { useRouter } from 'next/router';

const Layout = (props: any): JSX.Element => {
  const router = useRouter();
  return (
    <React.Fragment>
      <Header
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
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
