import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
