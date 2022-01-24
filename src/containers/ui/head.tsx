import NextHead from 'next/head';
import SchemaLD from '../schema-ld';

interface IHead {
  title?: string;
  type?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  author?: string;
  thumbnail?: string;
  rating?: number;
  view?: number;
  dateModified?: Date;
  datePublished?: Date;
}

const Head = (props: IHead): JSX.Element => {
  const siteName = 'Phong Huy';
  const slogan = ' - Creative frontend developer';
  const description = "My name is Phong, I'm a creative frontend developer";
  const headTitle = props.title ? `${props.title} - ` : '';

  return (
    <NextHead>
      <title>{headTitle + siteName}</title>

      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <link rel="icon" href="favicon.ico" type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
        rel="stylesheet"
      />
      <meta
        name="keyword"
        content={props.keywords || 'theparahouse, the para house'}
      />
      <meta name="generator" content={siteName + slogan} />
      <meta name="copyright" content={siteName + slogan} />
      <meta name="author" content="@xxxparanoise" />
      <meta name="keywords" content="theparahouse, the para house" />
      <meta name="language" content="vi" />
      <meta name="description" content={props.description} />
      <meta name="author" content={props.author || siteName} />
      <meta
        name="image"
        content={props.thumbnail || '/img/core-img/logo.png'}
      />

      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content={siteName} />
      <meta property="twitter:title" content={props.title || siteName} />
      <meta
        property="twitter:description"
        content={props.description || description}
      />
      <meta
        property="twitter:image"
        content={props.thumbnail || '/img/core-img/logo.png'}
      />
      <meta property="twitter:url" content={props.canonical || '/'} />
      <meta property="og:type" content={props.type || 'article'} />
      <meta
        name="og:title"
        property="og:title"
        content={props.title || siteName}
      />
      <meta
        name="og:description"
        property="og:description"
        content={props.description}
      />
      <meta name="og:site_name" property="og:site_name" content={siteName} />
      <meta name="og:url" property="og:url" content={props.canonical} />
      <meta
        name="og:image"
        property="og:image"
        content={props.thumbnail || '/img/core-img/logo.png'}
      />
      <meta name="theme-color" content="#ffffff"></meta>
      <SchemaLD
        mainOfPage={props.canonical}
        type={props.type}
        rating={props.rating}
        view={props.view}
        description={props.description}
        title={props.title}
        thumbnail={props.thumbnail}
        dateModified={props.dateModified || new Date(Date.now())}
        datePublished={props.datePublished || new Date(Date.now())}
      />
    </NextHead>
  );
};

export default Head;
