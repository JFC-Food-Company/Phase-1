import { keyframes } from "styled-components"

export const ScaleDown = keyframes`
 {
  0% {
    -webkit-transform: translateZ(1);
            transform: translateZ(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateZ(600px);
            transform: translateZ(600px);
    opacity: 0;
  }
`
// animation: slide-out-fwd-center 5s cubic-bezier(0.550, 0.085, 0.680, 0.530) reverse both;

export const FadeIn = keyframes`

  0% {
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  100% {
    opacity: 0;
  }

`;

//animation: fade-out 1s ease-out reverse both;

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