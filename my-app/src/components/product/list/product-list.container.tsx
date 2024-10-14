import React from 'react';
import ProductList from './product-list.component';
import useProducts from '../../../hooks/products.hook';

const ProductListContainer: React.FC = () => {
    const { products, loading, error } = useProducts();

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>{error}</p>;

    return <ProductList products={products} />;
};

export default ProductListContainer;