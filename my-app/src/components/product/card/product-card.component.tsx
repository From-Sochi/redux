// import React, { memo, FC } from 'react';
// type ProductCardProps = {};

// const ProductCard: FC<ProductCardProps> = () => {
//     return (
//         <>

//                 ProductCard <br /> Title
//                 <br /> Image
//                 <br /> Price
//                 <br /> Description

//         </>
//     );
// };
// export default memo(ProductCard);

import React, { memo, FC } from 'react';
import styled from 'styled-components';
import { ProductModel } from '../../../data/product.model';
import { Card, Image, Title, Description, Price } from '../../../assets/styles/app.styles';


type ProductCardProps = ProductModel;

const ProductCard: FC<ProductCardProps> = ({ title, image, price, description }) => {
    return (
        <Card>
            <Image src={image} alt={title} />
            <div>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </div>
            <Price>${price}</Price>
        </Card>
    );
};

export default memo(ProductCard);
