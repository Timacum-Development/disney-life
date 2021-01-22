import styled, { keyframes } from 'styled-components';

export const HeaderAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const HeaderWrapper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 49px 260px 0;
	position: relative;
	z-index: 10;
	animation: ${HeaderAnimation} 1s ease-out forwards;
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
