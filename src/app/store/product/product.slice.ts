import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductModel } from '../../../data/product.model';

const initialState: ProductModel[] = [];

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductsAction: (state, action: PayloadAction<ProductModel[]>) => {
            return action.payload;
        },
    },
});

export const { setProductsAction } = productSlice.actions;
export default productSlice.reducer;
