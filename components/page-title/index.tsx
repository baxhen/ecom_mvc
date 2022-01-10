import React from "react";

import Typography from "@mui/material/Typography";
import { withTheme, WithTheme as WithThemeProps } from "@mui/styles";
import { Theme } from "@mui/material";

import useStyles from "./styles";

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
}

const PageTitle: React.FC<Props> = ({ theme, title, variant = "h4" }) => {
  const { cls_page_title } = useStyles();

  return (
    <div className={cls_page_title}>
      <Typography variant={variant}>{title}</Typography>
    </div>
  );
};

export default withTheme<Theme, typeof PageTitle>(PageTitle);
