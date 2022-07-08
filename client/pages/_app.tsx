import "semantic-ui-css/semantic.min.css";
import { GlobalPropsProvider } from "../contexts/global-context";
import type { AppProps } from "next/app";
import Layout from "../layouts/layout";

function MyApp({ Component, pageProps }: AppProps) {
  const { user } = pageProps;
  return (
    <>
      <GlobalPropsProvider user={user}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalPropsProvider>
    </>
  );
}

export default MyApp;
