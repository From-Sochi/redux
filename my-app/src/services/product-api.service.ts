import axios, { AxiosResponse } from 'axios';
import { ProductModel } from '../data/product.model';
import { PRODUCTS_URL } from '../constants/api.constants';

const fetchProductsApi = async (): Promise<AxiosResponse<ProductModel[]>> => {
    return await axios.get(PRODUCTS_URL);
};

export { fetchProductsApi };