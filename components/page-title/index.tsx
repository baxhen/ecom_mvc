import React from "react";

import Typography from "@mui/material/Typography";
import { withTheme, WithTheme as WithThemeProps } from "@mui/styles";
import { Theme } from "@mui/material";

import useStyles from "./styles";

interface Props extends WithThemeProps<Theme> {
  title: string;
}

const PageTitle: React.FC<Props> = ({ theme, title }) => {
  const { cls_page_title } = useStyles();

  return (
    <div className={cls_page_title}>
      <Typography variant="h4">{title}</Typography>
    </div>
  );
};

export default withTheme<Theme, typeof PageTitle>(PageTitle);
