import { ProductModel } from './product.model';
import fetchProducts from './fetchProducts';

export const productListData: ProductModel[] = [];

const loadData = async () => {
    try {
        const products = await fetchProducts();
        products.forEach((product: ProductModel) => {
            productListData.push(product);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

loadData();