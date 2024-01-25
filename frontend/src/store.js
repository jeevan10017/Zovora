import { configureStore} from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';  //importing the apiSlice
import cartSliceReducer from './slices/cartSlice';  //importing the cartSlice
const store = configureStore({  //creating the store
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,  //reducerPath
        cart: cartSliceReducer,  //cart
    },  //reducer
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),  //middleware
    devTools : true,  //devTools
});

export default store; //exporting the store