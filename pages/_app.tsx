import React from "react";
import type { AppContext, AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { PersistGate } from "redux-persist/integration/react";
import type { IncomingMessage } from "http";
import cookie from "cookie";
import { SSRKeycloakProvider, SSRCookies } from "@react-keycloak/ssr";

import Header from "../containers/header";
import theme from "../styles/theme";
import { persistor, storeWrapper, useAppSelector } from "../store";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { showHeaderSelector } from "../store/ui";
import Menu from "../containers/menu";

const keycloakCfg = {
  url: "https://auth.carrin.io/auth",
  realm: "carrin",
  clientId: "apps-authentication",
};

interface InitialProps {
  cookies: unknown;
}

function MyApp({ Component, pageProps, cookies }: AppProps & InitialProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  const showHeader = useAppSelector(showHeaderSelector);

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
      <SSRKeycloakProvider
        keycloakConfig={keycloakCfg}
        persistor={SSRCookies(cookies)}
      >
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps?.dehydratedState}>
            <PersistGate loading={null} persistor={persistor}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                {showHeader ? <Header /> : <Menu />}
                <Component {...pageProps} />
              </ThemeProvider>
            </PersistGate>
          </Hydrate>
        </QueryClientProvider>
      </SSRKeycloakProvider>
    </>
  );
}

function parseCookies(req?: IncomingMessage) {
  if (!req || !req.headers) {
    return {};
  }
  return cookie.parse(req.headers.cookie || "");
}

MyApp.getInitialProps = async (context: AppContext) => {
  // Extract cookies from AppContext
  return {
    cookies: parseCookies(context?.ctx?.req),
  };
};

export default storeWrapper.withRedux(MyApp);
