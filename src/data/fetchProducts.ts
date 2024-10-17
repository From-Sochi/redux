
import { ProductModel } from './product.model'; 

const fetchProducts = async (): Promise<ProductModel[]> => {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const products = await response.json();
    return products; 
};

export default fetchProducts;