import { createGlobalStyle } from "styled-components";
import { color } from "./styles";

export default createGlobalStyle`
	@font-face {
		font-family: 'gothamregular';
		src: url('gotham_regular-webfont.woff2') format('woff2'),
			url('gotham_regular-webfont.woff') format('woff');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
    font-family: 'Gotham Book';
    src: url('Gotham-Book.woff2') format('woff2'),
        url('Gotham-Book.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
	}

	@font-face {
    font-family: 'Gotham';
    src: url('Gotham-Medium.woff2') format('woff2'),
        url('Gotham-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
	}

	@font-face {
    font-family: 'Gotham';
    src: url('Gotham-Bold.woff2') format('woff2'),
        url('Gotham-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
	}

	html, body, #root {
		height: 100%;
		min-height: 100%;
		margin: 0;
		font-family: 'Playfair Display', serif;
		box-sizing: border-box;
		font-size: 16px;
		height: 100%;
	}

	* {
		box-sizing: border-box;
	}

	body {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	main {
		flex: 1 0 auto;
		width: 100%;
	}

	a {
		display: inline-block;
	}

	h1,
	h2 {
		font-family: 'Gotham';
		font-weight: bold;
	}

	h1,
	h3 {
		color: ${color.white};
	}

	h1 {
		font-size: 5rem;
	}

	h2 {
		font-size: 3.125rem;
		color: ${color.black};
	}
	
	h3 {
		font-size: 2.8125rem;

	}

	h4 {
		font-size: 2.1875rem;
	}

	h5 {
		font-size: 1.25rem;
		color: ${color.darkGrey};
	}

	h6 {
		font-size: 1.0625rem;
		color: ${color.darkGrey};
	}

`;
