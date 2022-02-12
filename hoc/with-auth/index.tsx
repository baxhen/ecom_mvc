import React from "react";
import { useRouter } from "next/router";
import { useKeycloak } from "@react-keycloak/ssr";
import type { KeycloakInstance, KeycloakTokenParsed } from "keycloak-js";

import theme from "../../styles/theme";

const withAuth = (Component: React.FC) => (props: any) => {
  const { keycloak, initialized } = useKeycloak<KeycloakInstance>();
  const router = useRouter();

  React.useEffect(() => {
    if (initialized && keycloak) {
      if (!keycloak.authenticated) {
        console.log(keycloak.authenticated, { initialized });
        keycloak.login();
      }
    }
  }, [initialized, keycloak]);
  return <Component {...props} />;
};

export default withAuth;
