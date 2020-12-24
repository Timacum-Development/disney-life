import styled, { keyframes } from "styled-components";
import { color } from "../../styles";

export const HoverFirst = keyframes`
  0% {
    transform: rotate(0deg);
  } 

  25% {
    transform: rotate(-3deg);
  }

  50% {
    transform: rotate(3deg);
  }

  100% {
    transform: rotate(0deg);
  }

`;

export const CtaWhite = styled.a`
  text-align: center;
  background-color: ${color.white};
  color: ${color.lightRed};

  &:hover {
    animation: ${HoverFirst} 0.5s ease-in-out forwards;
  }
`;

export const CtaBlue = styled.a`
  text-align: center;
  background-color: ${color.blue};
  color: ${color.white};
  transition: 0.25s ease-in-out;

  &:hover {
    background-color: ${color.white};
    color: ${color.blue};
  }
`;

export const CtaGreen = styled.a`
  text-align: center;
  background-color: ${color.green};
  color: ${color.white};

  transition: 0.25s ease-in-out;

  &:hover {
    background-color: ${color.white};
    color: ${color.green};
  }
`;
