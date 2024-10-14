import React from 'react';
import { ProductModel } from '../../../data/product.model';
import ProductCard from '../card/product-card.component';
import { CardContainer } from '../../../assets/styles/app.styles';

type ProductListProps = {
    products: ProductModel[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <CardContainer>
            {products.length > 0 ? (
                products.map(product => <ProductCard key={product.id} {...product} />)
            ) : (
                <p>No products available.</p>
            )}
        </CardContainer>
    );
};

export default ProductList;