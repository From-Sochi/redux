import { productListData } from '../data/product.data'; 
import ProductCard from '../components/product/card/product-card.component'; 


function Root() {
    return <ProductCard {...productListData[0]} />;
}

export default Root;
