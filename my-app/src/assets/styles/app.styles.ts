import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 24px;
	line-height: 1.5;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
    nav {
	display: flex;
	flex-direction: column;
}

ul {
	list-style: none;
	padding: 0;
}

h1, h2, h3 {
	margin: 0;
}

button {
	text-decoration: none;
	color: blue;
	cursor: pointer;
}

#main {
	display: flex;
	margin: 20px;
}

#menu {
	margin-right: 50px;
	padding-top: 50px;
	padding-right: 50px;
	border-right: 2px solid lightgray;
	font-weight: bold;
}
`;

export const Card = styled.div`
    max-width: 600px;
    display: flex;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
`;

export const Image = styled.img`
    width: 150px;
    height: auto;
    margin-right: 16px;
`;

export const Title = styled.h2`
    font-size: 10px;
    margin: 0;
`;

export const Description = styled.p`
    width: 350px;
    margin: 4px 0;
`;

export const Price = styled.p`
    color: green;
    font-size: 16px;
    margin-left: auto;
`;
