import {createAsyncThunk} from '@reduxjs/toolkit'
import { ProductType } from '../../types/products'

export const nextPage = createAsyncThunk(
    "products/nextPage",
    async(_, thunkAPI) =>{
        try{
            return ''
        }catch(e){

        }
    }
)

export const previousPage = createAsyncThunk(
    "products/previousPage",
    async(_, thunkAPI) =>{
        try{
            return ''
        }catch(e){

        }
    }
)

export const deleteProduct = createAsyncThunk(
    "products/previousPage ",
    async(id: number, thunkAPI) =>{
        try{
            return id
        }catch(e){

        }
    }
)

export const addProduct = createAsyncThunk(
    "products/addProduct",
    async(product: ProductType, thunkAPI) =>{
        try{
            return product
        }catch(e){

        }
    }
)

export const productChange = createAsyncThunk(
    "products/productChange",
    async(product: ProductType, thunkAPI) =>{
        try{
            return product
        }catch(e){

        }
    }
)