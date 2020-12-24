import styled from "styled-components";
import { color } from "../../../shared/styles";

export const FooterWrap = styled.div`
  display: flex;
  position: relative;
`;

export const FooterYellow = styled.div`
  width: 321px;
  height: 366px;
  background-color: ${color.yellow};
  clip-path: polygon(0% 0%, 86% 8%, 99% 100%, 0% 100%);
`;

export const FooterRed = styled.div`
  width: 100%;
  height: 391px;
  background-color: ${color.lightRed};
  clip-path: polygon(0% 27%, 100% 0%, 100% 100%, 0% 100%);
  position: absolute;
  bottom: 0;
  z-index: -1;
`;

export const FooterBlue = styled.div`
  width: 321px;
  height: 201px;
  background-color: ${color.blue};
  clip-path: polygon(100% 0%, 100% 100%, 0% 100%);
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const SidePhotoLayer = styled.img`
  display: block;
  position: absolute;
  top: -83%;
  left: 170px;
  z-index: 50;
`;

export const FooterInfo = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
`;
