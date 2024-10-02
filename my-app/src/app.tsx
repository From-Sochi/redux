import { GlobalStyle } from './assets/styles/app.styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './app/root';
import { productListData } from './data/product.data';
import ProductCard from './components/product/card/product-card.component';

const router = createBrowserRouter([{ path: '/', element: <Root /> }]);

function App() {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
