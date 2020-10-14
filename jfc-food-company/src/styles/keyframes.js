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

export const PopIn = keyframes`
  0% {
            transform: scale(0);
    opacity: 1;
  }
  100% {
            transform: scale(1);
    opacity: 1;
  }
}
@keyframes scale-in-center {
  0% {
            transform: scale(0);
    opacity: 1;
  }
  100% {
            transform: scale(1);
    opacity: 1;
  }
`;

//animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
