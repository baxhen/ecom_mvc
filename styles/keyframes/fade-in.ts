import { CSSObject } from "@emotion/react";

type AnimationObject = { [key: string]: CSSObject };

export const fadeIn: AnimationObject = {
  "@keyframes fadeIn": { from: { opacity: 0 }, to: { opacity: 1 } },
};
