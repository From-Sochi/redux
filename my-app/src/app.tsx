import React from 'react';
import { GlobalStyle } from './assets/styles/app.styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductListContainer from './components/product/list/product-list.container';

const router = createBrowserRouter([{ path: '/', element: <ProductListContainer /> }]);

function App() {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
}

export default App;

