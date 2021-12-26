import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { PersistGate } from "redux-persist/integration/react";

import Header from "../components/header";
import theme from "../styles/theme";
import { persistor, storeWrapper } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Brasil Shop</title>
        <meta name="description" content="Os melhores produtos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </>
  );
}

export default storeWrapper.withRedux(MyApp);
