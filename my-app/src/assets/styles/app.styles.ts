import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 24px;
    line-height: 1.5;
    background-color: floralwhite;
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
    flex-direction: column; /* Изменен порядок для лучшего управления */
}

#menu {
    margin-right: 50px;
    padding-top: 50px;
    padding-right: 50px;
    border-right: 2px solid lightgray;
    font-weight: bold;
}
    `;

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    width: 100%;
    padding: 0 100px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
        padding: 0 80px;
    }

    @media (max-width: 992px) {
        grid-template-columns: repeat(3, 1fr); // Это место для изменения количества карточек
        padding: 0 70px;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 0 60px;
    }

    @media (max-width: 576px) {
        grid-template-columns: 1fr;
        padding: 0 50px;
    }
`;

export const TitleCatalog = styled.h1`
    text-align: center;
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    min-width: 185px;
    max-width: 285px;
    flex: 1;

    @media (max-width: 1200px) {
        padding: 14px;
    }

    @media (max-width: 992px) {
        padding: 12px;
    }

    @media (max-width: 768px) {
        padding: 10px;
    }

    @media (max-width: 576px) {
        padding: 8px;
    }
`;

export const Image = styled.img`
    width: 150px;
    height: 200px;
    margin-bottom: 16px;
    object-fit: contain;
    display: block;

    @media (max-width: 1200px) {
        width: 140px;
        height: 190px;
    }

    @media (max-width: 992px) {
        width: 130px;
        height: 180px;
    }

    @media (max-width: 768px) {
        width: 120px;
        height: 170px;
    }

    @media (max-width: 576px) {
        width: 110px;
        height: 160px;
    }
`;

export const Title = styled.h2`
    font-size: 19px;
    margin: 0;

    @media (max-width: 1200px) {
        font-size: 18px;
    }

    @media (max-width: 992px) {
        font-size: 17px;
    }

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 576px) {
        font-size: 15px;
    }
`;

export const Description = styled.p`
    flex-grow: 1;
    font-size: 20px;
    overflow: hidden;
    overflow-y: auto;
    min-height: 80px;
    max-height: 200px;
    margin: 4px 0;
    padding-right: 10px;

    @media (max-width: 1200px) {
        font-size: 19px;
    }

    @media (max-width: 992px) {
        font-size: 18px;
    }

    @media (max-width: 768px) {
        font-size: 17px;
    }

    @media (max-width: 576px) {
        font-size: 16px;
    }

    &::-webkit-scrollbar {
        display: none;
    }

    scrollbar-width: none;
    -ms-overflow-style: none;
`;

export const Price = styled.p`
    color: green;
    margin-left: auto;
`;
