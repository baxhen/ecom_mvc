import React from "react";
import type { NextPage, NextPageContext } from "next";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import withHeaderSpacing from "../../hoc/with-header-spacing";
import Product from "../../components/product";
import { IOffer } from "../../types";
import { client } from "../../api";

interface Props {
  offer?: IOffer;
}

const Offer: NextPage<Props> = ({ offer }) => {
  console.log({ offer });
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="1rem"
        pt="1rem"
      >
        {offer?.products.map((product) => {
          return (
            <Product key={product.id} {...product} company={offer.company} />
          );
        })}
      </Box>
    </Box>
  );
};

const _Offer: NextPage<Props> = withHeaderSpacing(Offer);

_Offer.getInitialProps = async (context: NextPageContext) => {
  const { id } = context.query;

  try {
    const { data: offer } = await client.get<IOffer>(
      `/offerCommercial/${id}/products`
    );

    return { offer };
  } catch (error) {
    console.error(error);
  }

  return {};
};

export default _Offer;
