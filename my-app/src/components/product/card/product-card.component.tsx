import React, { memo, FC } from 'react';
type ProductCardProps = {};


const ProductCard: FC<ProductCardProps> = () => {
    return (
        <>
            
                ProductCard <br /> Title
                <br /> Image
                <br /> Price
                <br /> Description
           
            
        </>
    );
};
export default memo(ProductCard);
