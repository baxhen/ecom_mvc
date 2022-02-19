import React from "react";

import Typography from "@mui/material/Typography";
import { withTheme, WithTheme as WithThemeProps } from "@mui/styles";
import { Theme } from "@mui/material";

import useStyles from "./styles";
import clsx from "clsx";

interface Props extends WithThemeProps<Theme> {
  title: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit"
    | undefined;

  type?: "dashboard" | "page";
}

const PageTitle: React.FC<Props> = ({
  title,
  variant = "h4",
  type = "page",
}) => {
  const { cls_page_title, ...classes } = useStyles();

  return (
    <div
      className={clsx(cls_page_title, {
        [classes["cls_page_title--dashboard"]]: type === "dashboard",
      })}
    >
      <Typography variant={variant}>{title}</Typography>
    </div>
  );
};

export default withTheme<Theme, typeof PageTitle>(PageTitle);
