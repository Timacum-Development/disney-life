import styled, { keyframes } from "styled-components";
import { color } from "../../styles";

// export const CardHover = keyframes`
//   0%{
//     border-bottom: 3px solid ${color.blue};
//     transform: translateY(2px);
//   }

//   50%{
//     border-bottom: 3px solid ${color.blue};
//     transform: translateY(2px);
//   }

//   100%{
//     border-bottom: 3px solid ${color.blue};
//     transform: translateY(2px);
//   }
// `;

export const DisneyCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  position: relative;
  padding: 45px 0;
  transition: all 0.25s;
  box-sizing: border-box;

  &:hover {
    background-color: rgba(95, 148, 255, 0.1);
    position: relative;
    z-index: -1;
    box-sizing: border-box;
  }
`;

export const CardIcon = styled.img`
  display: block;
  width: auto;
  height: auto;
  margin: 0 auto;
`;

export const CardText = styled.p`
  font-size: 0.875rem;
  font-family: "Gotham", sans;
  color: ${color.darkerGrey};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 20px;
`;

export const BoxLeft = styled.div`
  border-top: 1px solid ${color.lightGrey};
  border-left: 1px solid ${color.lightGrey};
  top: 0;
  left: 0;
`;

export const BoxRight = styled.div`
  border-top: 1px solid ${color.lightGrey};
  border-right: 1px solid ${color.lightGrey};
  top: 0;
  right: 0;
`;

export const BoxBottomRight = styled.div`
  border-right: 1px solid ${color.lightGrey};
  border-bottom: 1px solid ${color.lightGrey};
  right: 0;
  bottom: 0;
`;

export const BoxBottomLeft = styled.div`
  border-bottom: 1px solid ${color.lightGrey};
  border-left: 1px solid ${color.lightGrey};
  bottom: 0;
  left: 0;
`;
