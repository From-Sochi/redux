import { productListData } from '../data/product.data';
import ProductCard from '../components/product/card/product-card.component';
import { GlobalStyle, TitleCatalog, CardContainer } from '../assets/styles/app.styles';
// import { nanoid } from '@reduxjs/toolkit';

function Root() {
    const productsToShow = productListData.slice(0, 10);

    return (
        <>
            <GlobalStyle />
            <TitleCatalog>Catalog</TitleCatalog>
            <CardContainer>
                {productsToShow.length > 0 ? (
                    productsToShow.map(product => <ProductCard key={product.id} {...product} />)
                ) : (
                    <p>Loading products...</p>
                )}
            </CardContainer>
        </>
    );
}

export default Root;
