import { keyframes } from "styled-components";

export const LogoFocusIn = keyframes`
0% {
            transform: scale(2);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
            transform: scale(1);
            filter: blur(0px);
    opacity: 1;
  }
`;

//animation:  animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
