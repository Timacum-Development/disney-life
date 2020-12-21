import { createGlobalStyle } from "styled-components";

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

`;
