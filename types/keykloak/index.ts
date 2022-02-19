import type { KeycloakTokenParsed } from "keycloak-js";

export type ParsedToken = KeycloakTokenParsed & {
  name?: string;

  preferred_username?: string;

  given_name?: string;

  family_name?: string;

  instanceName?: string;

  instance?: string;
};
