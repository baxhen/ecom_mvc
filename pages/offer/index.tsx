import React from "react";
import type { NextPage } from "next";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import withHeaderSpacing from "../../hoc/with-header-spacing";
import Product from "../../components/product";

const Offer: NextPage = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="1rem"
        pt="1rem"
      >
        <Product
          name="Bolsa"
          id={0}
          description="Bolsa top do momento"
          img="https://www.portotheme.com/wordpress/porto/shop1/wp-content/uploads/sites/77/2017/11/product-23-600x600.jpg"
          sku="654111995-1-1-2"
          store="Renner"
          price={158}
        />
        <Product
          name="Camiseta"
          id={1}
          description="Maniseta top do momento"
          img="https://cdn.shopify.com/s/files/1/0526/4123/5093/products/T-ShirtAntiviral-02_467ec224-6e88-43a1-a2dd-aa0eb5182854.jpg?v=1628805899"
          sku="654111995-1-1-4"
          store="Renner"
          price={52}
        />
      </Box>
    </Box>
  );
};

export default withHeaderSpacing(Offer);
