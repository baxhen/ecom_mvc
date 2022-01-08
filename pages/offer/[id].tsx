import React from "react";
import type { NextPage, NextPageContext } from "next";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import withHeaderSpacing from "../../hoc/with-header-spacing";
import Product from "../../components/product";
import { IOffer } from "../../types";
import { client } from "../../api";
import { useAppDispatch, useAppSelector } from "../../store";
import { addOffer, offersSelector } from "../../store/offer";

interface Props {
  offer?: IOffer;
  id?: string;
}

const Offer: NextPage<Props> = ({ offer, id }) => {
  const dispatch = useAppDispatch();

  const offers = useAppSelector(offersSelector);

  const [_offer, setOffer] = React.useState(offer);

  React.useEffect(() => {
    if (offer) {
      dispatch(addOffer(offer));

      return;
    }

    if (id) {
      const offer = offers.find((off) => off.id === +id);

      if (offer) {
        setOffer(offer);
      }
    }
  }, []);
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="1rem"
        pt="1rem"
      >
        {_offer?.products.map((product) => {
          return (
            <Product key={product.id} {...product} company={_offer.company} />
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

  if (Array.isArray(id)) {
    return { id: id[0] };
  }

  return { id };
};

export default _Offer;
