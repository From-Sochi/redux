import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsApi } from '../services/product-api.service';
import { setProductsAction } from '../app/store/product.slice';
import { selectProducts } from '../app/store/product/product.selectors';

const useProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError('');
            try {
                const response = await fetchProductsApi();
                dispatch(setProductsAction(response.data)); // Сохраняем продукты в стейт
            } catch (e) {
                setError(`Something went wrong! Error: ${String(e)}`);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [dispatch]); // Убедитесь, что dispatch в зависимостях

    return { products, loading, error };
};

export default useProducts;