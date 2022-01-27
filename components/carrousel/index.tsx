import React from "react";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { withTheme, WithTheme as WithThemeProps } from "@mui/styles";
import { Theme } from "@mui/material";

import useStyles from "./styles";

interface Props extends WithThemeProps<Theme> {
  items: any[];
  slideInterval?: number;
}

const defaultProps: Partial<Props> = { slideInterval: 7000 };

const Carrousel: React.FC<Props> = ({ slideInterval, items }) => {
  const router = useRouter();
  const { cls_carrousel, cls_carrousel__items, cls_carrousel__items__item } =
    useStyles();

  const itemsRef = React.useRef<any>(null);
  const [direction, setDirection] = React.useState<"right" | "left">("right");

  React.useEffect(() => {
    const interval = setInterval(() => {
      const viewArea = itemsRef.current.offsetWidth;
      const currentPosition =
        Math.round(itemsRef.current.scrollLeft / viewArea) + 1;

      const maxPosition = items.length;

      const minPosition = 1;

      // console.log({ currentPosition, maxPosition, minPosition });

      if (currentPosition === minPosition) {
        setDirection("right");
        itemsRef.current.scrollBy(viewArea, 0);
        return;
      }
      if (currentPosition === maxPosition) {
        setDirection("left");
        itemsRef.current.scrollBy(-viewArea, 0);
        return;
      }

      if (direction === "left") {
        itemsRef.current.scrollBy(-viewArea, 0);
      }
      if (direction === "right") {
        itemsRef.current.scrollBy(viewArea, 0);
      }
    }, slideInterval);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [items, direction, slideInterval]);

  return (
    <div id="items-wrapper" className={cls_carrousel}>
      <div ref={itemsRef} className={cls_carrousel__items}>
        {items.map((item, i) => {
          return (
            <div className={cls_carrousel__items__item} key={i}>
              <img src={item.src} />
              <Box
                position="absolute"
                top={0}
                height="100%"
                width="100%"
                display="flex"
                justifyContent="center"
                p="1rem"
              >
                <Typography variant="h3">{item.title}</Typography>
              </Box>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withTheme<Theme, typeof Carrousel>(Carrousel);
