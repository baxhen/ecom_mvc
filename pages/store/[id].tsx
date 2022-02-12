import React from "react";
import type { NextPage, NextPageContext } from "next";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import withHeaderSpacing from "../../hoc/with-header-spacing";
import Product from "../../containers/product";
import { IOffer } from "../../types";
import { client } from "../../api";
import { useAppDispatch, useAppSelector } from "../../store";
import { addOffer, offersSelector } from "../../store/offer";
import Carrousel from "../../containers/carrousel";
import { useRouter } from "next/router";

interface Props {
  offer?: IOffer;
  id?: string;
}

const Store: NextPage<Props> = ({ offer, id }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const offers = useAppSelector(offersSelector);

  const [_offer, setOffer] = React.useState(offer);

  const ofertas = [
    {
      src: "https://unsplash.it/1600/400?image=950",
      name: "Oferta 1",
      description: "Oferta descrição 1",
      id: 1,
    },
    {
      src: "https://unsplash.it/1600/400?image=930",
      name: "Oferta 2",
      description: "Oferta descrição 2",
      id: 2,
    },
    {
      src: "https://unsplash.it/1600/400?image=930",
      name: "Oferta 3",
      description: "Oferta descrição 3",
      id: 3,
    },
  ];
  const blocos = [
    {
      src: "https://unsplash.it/1600/400?image=950",
      name: "Bloco 1",
      description: "Bloco descrição 1",
      id: 1,
    },
    {
      src: "https://unsplash.it/1600/400?image=930",
      name: "Bloco 2",
      description: "Bloco descrição 2",
      id: 2,
    },
    {
      src: "https://unsplash.it/1600/400?image=930",
      name: "Bloco 3",
      description: "Bloco descrição 3",
      id: 3,
    },
  ];
  const lojas = [
    {
      src: "https://unsplash.it/1600/400?image=950",
      name: "Loja 1",
      description: "Loja descrição 1",
      id: 1,
    },
    {
      src: "https://unsplash.it/1600/400?image=930",
      name: "Loja 2",
      description: "Loja descrição 2",
      id: 2,
    },
    {
      src: "https://unsplash.it/1600/400?image=930",
      name: "Loja 3",
      description: "Loja descrição 3",
      id: 3,
    },
  ];

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
    <Box display="flex" flexDirection="column" alignItems="center" gap="1rem">
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

      <Carrousel
        items={ofertas}
        slideInterval={5000}
        onClick={(id) => {
          router.push(`/offer/${id}`);
        }}
      />
      <Carrousel
        items={blocos}
        slideInterval={6000}
        onClick={(id) => {
          router.push(`/block/${id}`);
        }}
      />
      <Carrousel
        items={lojas}
        slideInterval={7000}
        onClick={(id) => {
          router.push(`/store/${id}`);
        }}
      />
    </Box>
  );
};

const _Store: NextPage<Props> = withHeaderSpacing(Store);

_Store.getInitialProps = async (context: NextPageContext) => {
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

export default _Store;
