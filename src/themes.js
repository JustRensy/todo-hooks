import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
	body: '#fff',
	fontColor: '#000',
};

export const darkTheme = {
	body: '#181818',
	fontColor: '#fff',
};

export const GlobalStyle = createGlobalStyle`
	* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

body {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: ${(props) => props.theme.body};
	color: ${(props) => props.theme.fontColor};
	height: 100vh;
	width: 100vw;
	transition: background .5s, color .5s ease;
}

code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
		monospace;
}
`;
