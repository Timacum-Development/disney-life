import styled from "styled-components";
import { color } from "../../styles";

export const CartoonMovie = styled.img`
  display: block;
  width: 14%;
  height: auto;
  margin-right: 40px;
  filter: drop-shadow(0px 5px 10px ${color.black});

  &:last-child {
    margin-right: 0;
  }
`;
