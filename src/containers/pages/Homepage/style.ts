import styled from "styled-components";
import { color } from "../../../shared/styles";

export const Hero = styled.section`
  display: flex;
`;

export const ShapeWrap = styled.div`
  width: 50%;
`;

export const BlueShape = styled.div`
  width: 100%;
  height: 500px;
  background-color: ${color.blue};
  clip-path: polygon(0 0, 80% 0, 100% 100%, 0 70%);
`;

export const YellowShape = styled.div`
  width: 100%;
  height: 481px;
  background-color: ${color.yellow};
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0% 2%, 100% 23%, 100% 71%, 0% 100%);
`;

export const RedShape = styled.div`
  width: 50%;
  max-width: 1061px;
  height: 981px;
  background-color: ${color.lightRed};
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 30% 90%);
`;
