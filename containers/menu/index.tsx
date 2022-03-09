import React from "react";
import { useRouter } from "next/router";
import { useKeycloak } from "@react-keycloak/ssr";
import type { KeycloakInstance } from "keycloak-js";

import { withTheme, WithTheme as WithThemeProps } from "@mui/styles";
import { Theme } from "@mui/material";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ArtTrackIcon from "@mui/icons-material/ArtTrack";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import useStyles from "./styles";
import { ParsedToken } from "../../types";

interface Props extends WithThemeProps<Theme> {}

const _Menu: React.FC<Props> = () => {
  const router = useRouter();
  const { cls_menu, cls_menu__instance, cls_menu__username, cls_menu__list } =
    useStyles();

  const { keycloak } = useKeycloak<KeycloakInstance>();
  const parsedToken: ParsedToken | undefined = keycloak?.tokenParsed;

  const menuItems = [
    {
      label: "Produtos",
      Icon: ArtTrackIcon,
      onClick: () => router.push("/dashboard/product"),
    },
    { label: "SKUs", Icon: Inventory2Icon, onClick: () => {} },
    { label: "Ofertas", Icon: LocalOfferIcon, onClick: () => {} },
    {
      label: "Sair",
      Icon: LogoutIcon,
      onClick: () => keycloak?.logout({ redirectUri: window.location.origin }),
    },
  ];

  return (
    <Box className={cls_menu}>
      <Box
        display="flex"
        alignItems="center"
        padding="1rem"
        flexDirection="column"
      >
        <Typography
          className={cls_menu__instance}
          variant="h5"
          onClick={() => router.push("/dashboard")}
        >
          {parsedToken?.instanceName || "Brasil Shop"}
        </Typography>
        <Typography className={cls_menu__username} variant="body1">
          {parsedToken?.name || "Brasil Shop"}
        </Typography>
      </Box>

      <Box height="100%">
        <List className={cls_menu__list}>
          {menuItems.map(({ label, Icon, onClick }) => (
            <ListItem button key={label} onClick={onClick}>
              <ListItemIcon>
                <Icon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary={label} sx={{ color: "white" }} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export const Menu = withTheme<Theme, typeof _Menu>(_Menu);

export default Menu;
