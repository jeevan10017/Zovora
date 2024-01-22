import { configureStore} from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';  //importing the apiSlice

const store = configureStore({  //creating the store
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,  //reducerPath
    },  //reducer
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),  //middleware
    devTools : true,  //devTools
});

export default store; //exporting the store