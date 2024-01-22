import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({   //injecting the endpoints
    endpoints: (builder) => ({
        getProducts: builder.query({   //getProducts using builder.query
            query: () => ({
            url:PRODUCTS_URL, //url
            }),
            keepUnusedDataFor: 5,  //keepUnusedDataFor5 seconds
        }),
        getProductDetails: builder.query({  //getProductDetails using builder.query
            query: (productid) => ({
                url: `${PRODUCTS_URL}/${productid}`,  //url
            }),
            keepUnusedDataFor: 5,  //keepUnusedDataFor5 seconds
        }),
    }),
});
    export const { useGetProductsQuery,useGetProductDetailsQuery } = productsApiSlice;  //exporting the useGetProductsQuery