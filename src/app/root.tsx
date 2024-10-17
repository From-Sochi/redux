import { productListData } from '../data/product.data';
import ProductCard from '../components/product/card/product-card.component';
import { GlobalStyle, CardContainer } from '../assets/styles/app.styles';


function Root() {
    const productsToShow = productListData;

    return (
        <>
            <GlobalStyle />
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




