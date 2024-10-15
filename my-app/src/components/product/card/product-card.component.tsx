import React, { memo, FC } from 'react';
import { ProductModel } from '../../../data/product.model';
import { Card, Image, Title, description, Price } from '../../../assets/styles/app.styles';
import Description from '../description/Description';

type ProductCardProps = ProductModel;

const ProductCard: FC<ProductCardProps> = ({ title, image, price, description }) => {
    return (
        <Card>
            <Image src={image} alt={title} />
            <Title>{title}</Title>
            <Description text={description} />
            <Price>${price}</Price>
        </Card>
    );
};

export default memo(ProductCard);
