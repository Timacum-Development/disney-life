import { findByLabelText } from "@testing-library/react";
import styled from "styled-components";
import { color } from "../../../shared/styles";

export const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 44px 0 46px 0;
`;

export const Logo = styled.img`
  display: block;
  width: 97px;
  height: 29px;
`;

export const RightWrap = styled.div`
  display: flex;
`;

export const SearchWrap = styled.div`
  display: flex;
  position: relative;
  margin-right: 52px;
`;

export const Search = styled.input`
  width: 291px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${color.grey};
  background-color: transparent;
`;

export const Magnifier = styled.img`
  display: block;
  width: 13px;
  height: 13px;
  position: absolute;
  right: 0;
`;

export const Language = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 57px;
`;

export const LanguageTxt = styled.p`
  font-size: 0.875rem;
  text-transform: uppercase;
  font-family: "museo_sans700", sans;
  font-weight: 700;
`;

export const Burger = styled.button`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  width: 41px;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 3px 0;
  cursor: pointer;
`;

export const BurgerLine = styled.span`
  display: block;
  width: 41px;
  height: 2px;
  background-color: ${color.black};
  position: relative;

  &:first-child {
    width: 30px;
    right: -11px;
  }

  &:last-child {
    width: 25px;
    right: -16px;
  }
`;
