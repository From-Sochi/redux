import React from 'react';
import ProductList from './product-list.component';
import useProducts from '../../../hooks/products.hook';
import BasicModal from '../../modal/BasicModal';
import { TitleCatalog, ModalField } from '../../../assets/styles/app.styles';

const ProductListContainer: React.FC = () => {
    const { products, loading, error } = useProducts();

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <TitleCatalog>Catalog</TitleCatalog>
            <ModalField>
                <BasicModal />
            </ModalField>
            <ProductList products={products} />
        </>
    );
};

export default ProductListContainer;
