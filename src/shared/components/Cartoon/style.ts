import styled, { keyframes } from "styled-components";
import { color } from "../../styles";

export const CartoonAnimation = keyframes`
  0% {
    transform: scale(1)
  }

  100% {
    transform: scale(1.1)
  }
`;

export const CartoonMovie = styled.img`
  display: block;
  width: 200px;
  height: 300px;
  margin-right: 20px;
  filter: drop-shadow(0px 5px 10px ${color.black});
  border: 20px solid transparent;
  transition: all 0.15s ease-in;
  box-sizing: content-box;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    border: 20px solid ${color.lightRed};
    animation: ${CartoonAnimation} 0.5 ease-in forwards;
  }
`;
