import { configureStore } from '@reduxjs/toolkit';
import productReducer from './product.slice';

const store = configureStore({
    reducer: {
        product: productReducer  // Подключаем редьюсер продукта
    }
});

export type RootState = ReturnType<typeof store.getState>; // Тип для стейта
export type AppDispatch = typeof store.dispatch; // Тип для dispatch

export default store;