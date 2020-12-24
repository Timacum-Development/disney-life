import styled, { keyframes } from "styled-components";
import { color } from "../../styles";

export const HoverLinkFirst = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-3px);
  }

  100% {
    transform: translateY(3px);
  }


  100% {
    transform: translateY(0);
  }
`;

export const HeaderLink = styled.a`
  font-size: 1rem;
  font-family: "Gotham", sans;
  font-weight: 500;
  color: ${color.white};
  transition: color 0.25s;

  &:hover {
    animation: ${HoverLinkFirst} 0.5s ease-in-out;
    color: ${color.black};
  }
`;

export const MainLink = styled.a`
  font-size: 0.875rem;
  font-family: "Gotham", sans;
  font-weight: 600;
  color: ${color.justGrey};
  margin-right: 13px;
`;
