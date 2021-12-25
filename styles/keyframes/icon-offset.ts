import { CSSObject } from "@emotion/react";

type AnimationObject = { [key: string]: CSSObject };

export const iconOffset: AnimationObject = {
  "@keyframes iconOffset": {
    from: { strokeDashoffset: 270, fill: "transparent" },
    to: { strokeDashoffset: 0 },
  },
};
