import '../styles/index.scss';
import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';
import Layout from '../containers/layout/default';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};
export default MyApp;
