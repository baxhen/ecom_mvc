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
import Carrousel from "../../components/carrousel";

interface Props {
  offer?: IOffer;
  id?: string;
}

const Offer: NextPage<Props> = ({ offer, id }) => {
  const dispatch = useAppDispatch();

  const offers = useAppSelector(offersSelector);

  const [_offer, setOffer] = React.useState(offer);

  const ofertas = [
    { src: "https://unsplash.it/1600/400?image=950", title: "Oferta 1" },
    { src: "https://unsplash.it/1600/400?image=930", title: "Oferta 2" },
    { src: "https://unsplash.it/1600/400?image=990", title: "Oferta 3" },
    { src: "https://unsplash.it/1600/400?image=980", title: "Oferta 4" },
    { src: "https://unsplash.it/1600/400?image=970", title: "Oferta 5" },
    { src: "https://unsplash.it/1600/400?image=976", title: "Oferta 6" },
    { src: "https://unsplash.it/1600/400?image=993", title: "Oferta 7" },
    { src: "https://unsplash.it/1600/400?image=969", title: "Oferta 8" },
  ];
  const blocos = [
    { src: "https://unsplash.it/1600/400?image=950", title: "Bloco 1" },
    { src: "https://unsplash.it/1600/400?image=930", title: "Bloco 2" },
    { src: "https://unsplash.it/1600/400?image=990", title: "Bloco 3" },
    { src: "https://unsplash.it/1600/400?image=980", title: "Bloco 4" },
    { src: "https://unsplash.it/1600/400?image=970", title: "Bloco 5" },
    { src: "https://unsplash.it/1600/400?image=976", title: "Bloco 6" },
    { src: "https://unsplash.it/1600/400?image=993", title: "Bloco 7" },
    { src: "https://unsplash.it/1600/400?image=969", title: "Bloco 8" },
  ];
  const lojas = [
    { src: "https://unsplash.it/1600/400?image=950", title: "Loja 1" },
    { src: "https://unsplash.it/1600/400?image=930", title: "Loja 2" },
    { src: "https://unsplash.it/1600/400?image=990", title: "Loja 3" },
    { src: "https://unsplash.it/1600/400?image=980", title: "Loja 4" },
    { src: "https://unsplash.it/1600/400?image=970", title: "Loja 5" },
    { src: "https://unsplash.it/1600/400?image=976", title: "Loja 6" },
    { src: "https://unsplash.it/1600/400?image=993", title: "Loja 7" },
    { src: "https://unsplash.it/1600/400?image=969", title: "Loja 8" },
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

      <Carrousel items={ofertas} slideInterval={1500} />
      <Carrousel items={blocos} slideInterval={1000} />
      <Carrousel items={lojas} slideInterval={2000} />
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
