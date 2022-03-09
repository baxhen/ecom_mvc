import React from "react";
import type { NextPage } from "next";
import { compose } from "redux";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useKeycloak } from "@react-keycloak/ssr";
import type { KeycloakInstance } from "keycloak-js";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Backdrop, CircularProgress, IconButton, Tooltip } from "@mui/material";

import PageTitle from "../../../components/page-title";
import {
  useGetProductsPaginated,
  ProductsPaginatedParams,
} from "../../../hooks";
import withMenuSpacing from "../../../hoc/with-menu-spacing";
import withAuth from "../../../hoc/with-auth";
import { ParsedToken } from "../../../types";
import Table, { ITableProps } from "../../../containers/table";
import { IProductsPaginated } from "../../../hooks/react-query/product/types";
import { Edit, More } from "@mui/icons-material";
import { useRouter } from "next/router";

interface Props {}

const _Product: NextPage<Props> = () => {
  const router = useRouter();

  const [params, setParams] = React.useState<ProductsPaginatedParams>({});
  const [rows, setRows] = React.useState<any>([]);

  const { keycloak } = useKeycloak<KeycloakInstance>();

  const parsedToken: ParsedToken | undefined = keycloak?.tokenParsed;

  const { data, isLoading } = useGetProductsPaginated(
    { instance: parsedToken?.instance, ...params },
    { enabled: !!parsedToken?.instance }
  );

  const columns = [
    { id: "name", label: "Produto", minWidth: 170 },
    { id: "quantity", label: "Quantidade", minWidth: 100 },
  ];

  const renderActions: ITableProps["renderActions"] = (row) => {
    console.log({ row });
    return (
      <Box display="flex">
        <Tooltip title="Editar" placement="top">
          <IconButton
            onClick={() => router.push(`/dashboard/product/${row.id}`)}
          >
            <Edit />
          </IconButton>
        </Tooltip>
      </Box>
    );
  };

  // const rows = [{ product: "Camiseta", quantity: 56 }];

  React.useEffect(() => {
    if (data) {
      const products: IProductsPaginated["data"] = { ...data };
      const serverRows = products.data.map((product) => {
        const quantity = product.skus.reduce((acc, curr) => {
          return acc + curr.quantity;
        }, 0);

        return { ...product, quantity };
      });

      setRows(serverRows);
    }
  }, [data]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="2rem"
      gap="2rem"
      height="100vh"
      sx={{ overflow: "auto" }}
    >
      <Box width="100%" display="flex" alignItems="center">
        <PageTitle title="Produtos" type="dashboard" />
        <Button
          variant="contained"
          onClick={() => router.push("/dashboard/product/add")}
          sx={{ height: "3rem" }}
        >
          Adicionar
        </Button>
      </Box>

      <Table columns={columns} rows={rows} renderActions={renderActions} />

      <Backdrop
        sx={{
          color: (theme) => theme.palette.common.white,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};

const Product: NextPage<Props> = compose(
  withMenuSpacing,
  withAuth
)(_Product) as any;

export default Product;
