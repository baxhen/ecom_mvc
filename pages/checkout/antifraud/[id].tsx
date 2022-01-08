import React from "react";
import type { NextPage, NextPageContext } from "next";

import Box from "@mui/material/Box";
import { useAppDispatch, useAppSelector } from "../../../store";
import withHeaderSpacing from "../../../hoc/with-header-spacing";
import PageTitle from "../../../components/page-title";

interface Props {
  //   offer?: IOffer;
  //   id?: string;
}

const AntiFraud: NextPage<Props> = ({}) => {
  const dispatch = useAppDispatch();

  //   const offers = useAppSelector(offersSelector);

  //   const [_offer, setOffer] = React.useState(offer);

  React.useEffect(() => {
    // if (offer) {
    //   dispatch(addOffer(offer));
    //   return;
    // }
    // if (id) {
    //   const offer = offers.find((off) => off.id === +id);
    //   if (offer) {
    //     setOffer(offer);
    //   }
    // }
  }, []);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="2rem"
      gap="2rem"
    >
      <PageTitle title="Antifraude" />
    </Box>
  );
};

const _AntiFraud: NextPage<Props> = withHeaderSpacing(AntiFraud);

// _Offer.getInitialProps = async (context: NextPageContext) => {
//   const { id } = context.query;

//   try {
//     const { data: offer } = await client.get<IOffer>(
//       `/offerCommercial/${id}/products`
//     );

//     return { offer };
//   } catch (error) {
//     console.error(error);
//   }

//   if (Array.isArray(id)) {
//     return { id: id[0] };
//   }

//   return { id };
// };

export default _AntiFraud;
