import styled from "styled-components";
import { color } from "../../styles";

export const WeOffer = styled.div`
  display: flex;
  margin-bottom: 31px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const MouseImg = styled.img`
  display: block;
  width: 21px;
  height: 19px;
  margin-right: 15px;
`;
export const ServiceText = styled.p`
  display: inline;
  font-size: 1.0625rem;
  font-family: "Gotham Book", sans;
  font-weight: normal;
`;

export const BoldFirst = styled.span`
  font-size: 1.0625rem;
  font-family: "Gotham", sans;
  font-weight: bold;
`;

export const BoldSecond = styled.span`
  font-size: 1.0625rem;
  font-family: "Gotham", sans;
  font-weight: bold;
`;
