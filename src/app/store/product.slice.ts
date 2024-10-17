import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductStateModel } from '../../models/state/product-state.model';
import { ProductModel } from '../../data/product.model';

const initialState: ProductStateModel = {
    products: [],
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductsAction: (state, action: PayloadAction<ProductModel[]>) => {
            state.products = action.payload; // Устанавливаем продукты в состояние
        },
        addProductAction: (state, action: PayloadAction<ProductModel>) => {
            state.products.push(action.payload); // Добавляем новый продукт
        },
    },
});

export const { setProductsAction, addProductAction } = productSlice.actions; // Экспортируем экшены
export default productSlice.reducer; // Экспортируем редьюсер