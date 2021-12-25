import { CSSObject } from "@emotion/react";

type AnimationObject = { [key: string]: CSSObject };

export const checkIconOffset: AnimationObject = {
  "@keyframes checkIconOffset": {
    from: { strokeDashoffset: 270, fill: "transparent" },
    to: { strokeDashoffset: 0 },
  },
};
