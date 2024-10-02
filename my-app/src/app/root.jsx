import { productListData } from '../data/product.data';
import ProductCard from '../components/product/card/product-card.component';

function Root() {
    return <>{productListData.length > 0 ? <ProductCard {...productListData[0]} /> : <p>Loading products...</p>}</>;
}

export default Root;
