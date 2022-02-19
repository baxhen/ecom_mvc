import React from "react";
import { useKeycloak } from "@react-keycloak/ssr";
import type { KeycloakInstance } from "keycloak-js";
import { useAppDispatch, useAppSelector } from "../../store";
import { showHeaderSelector, updateHeaderVisibility } from "../../store/ui";

const withAuth = (Component: React.FC) => (props: any) => {
  const dispatch = useAppDispatch();
  const showHeader = useAppSelector(showHeaderSelector);

  const { keycloak, initialized } = useKeycloak<KeycloakInstance>();

  React.useEffect(() => {
    if (initialized && keycloak) {
      if (!keycloak.authenticated) {
        keycloak.login();
      }
    }
  }, [initialized, keycloak]);

  React.useEffect(() => {
    if (showHeader) {
      dispatch(updateHeaderVisibility(false));
    }

    return () => {
      if (!window.location.pathname.includes("dashboard")) {
        dispatch(updateHeaderVisibility(true));
      }
    };
  }, []);
  return <Component {...props} />;
};

export default withAuth;
