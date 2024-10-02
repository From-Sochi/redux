
// import { ProductModel } from './product.model';

// export const productListData: ProductModel[] = [
//     // Здесь должны быть ваши тестовые данные продуктов
// ];



import { ProductModel } from './product.model';
import fetchProducts from '../fetchProducts';

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