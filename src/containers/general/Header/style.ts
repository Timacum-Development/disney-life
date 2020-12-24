import styled, { keyframes } from "styled-components";
import { color } from "../../../shared/styles";

export const HeaderAnimation = keyframes`
  0% {
    transform: translateX(-1000px);
  }

  100% {
    transform: translateX(0px);
  }
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 49px 260px 0;
  position: relative;
  z-index: 10;
  animation: ${HeaderAnimation} 1.5s ease-out forwards;
`;

export const InsideWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Login = styled.img`
  display: block;
  width: 43px;
  height: 43px;
  margin-right: 49px;
`;
