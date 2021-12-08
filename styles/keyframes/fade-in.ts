import { CSSObject } from "@emotion/react";

type AnimationObject = { [key: string]: CSSObject };

export const fadeIn: AnimationObject = {
  "@keyframes fadeIn": { from: { opacity: 0 }, to: { opacity: 1 } },
};
export const fadeInFromTop: AnimationObject = {
  "@keyframes fadeInFromTop": {
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
};
