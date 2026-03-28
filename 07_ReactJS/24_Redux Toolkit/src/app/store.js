import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer, // we use reducer to update data in the store

})