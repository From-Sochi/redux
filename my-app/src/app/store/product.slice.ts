import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductStateModel } from '../../models/state/product-state.model';
import { ProductModel } from '../../data/product.model';

const initialState: ProductStateModel = {
    products: []  // Начальное значение
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductsAction: (state, action: PayloadAction<ProductModel[]>) => {
            state.products = action.payload;  // Устанавливаем продукты в состояние
        }
    }
});

export const { setProductsAction } = productSlice.actions;  // Экспортируем экшен
export default productSlice.reducer;  // Экспортируем редьюсер