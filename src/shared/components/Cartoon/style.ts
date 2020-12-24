import styled, { keyframes } from "styled-components";
import { color } from "../../styles";

export const CartoonAnimation = keyframes`
  0% {
    border: 20px solid ${color.lightRed};
  }

  100% {
    border: 20px solid ${color.lightRed};
  }
`;

export const CartoonMovie = styled.img`
  display: block;
  width: 14%;
  height: auto;
  margin-right: 20px;
  filter: drop-shadow(0px 5px 10px ${color.black});
  border: 20px solid transparent;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    animation: ${CartoonAnimation} 0.5 ease-in forwards;
  }
`;
