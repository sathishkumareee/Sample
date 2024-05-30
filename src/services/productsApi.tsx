import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { ProductsInterface } from './models/productsInterface'

export const productsApi=createApi({
    reducerPath:"productsApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://fakestoreapi.com/"
    }),
    //query    - get endpoints
    //mutation - post endpoints
    endpoints:(builder)=>({
        getProducts:builder.query<ProductsInterface[],void>({
            query:()=> ({
                url:"products",
                method:'GET'
            })
        }),
        getProductsById:builder.query<ProductsInterface[],void>({
            query:(id)=> ({
                url:`products/${id}`,
                method:'GET'
            })
        })
    })
})

export const{useGetProductsQuery,useGetProductsByIdQuery}=productsApi

//default export
// export const {endpoints,reducer,reducerPath,middleware}=productsApi