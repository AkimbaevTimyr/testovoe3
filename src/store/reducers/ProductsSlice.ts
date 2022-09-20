import { createSlice } from "@reduxjs/toolkit";
import { ProductsStore } from "../../types/products";
import { addProduct, deleteProduct, nextPage, previousPage, productChange } from "../actions/ProductsActionCreator";

const initialState: ProductsStore = {
    products: [
        {
            id: 1,
            image: [
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQhyxeuTU7zR1L3BwWbAjEIJPNgN_UDu5Ug&usqp=CAU' ,
            ],
            name: 'Iphone 10',
            description: 'This is Iphone',
            prices: [ {id: 0, city: "", price: 1000},
                { id: 1, city: 'Алматы', price: 1100 },
                { id: 2,city: 'Актобе', price: 1200 },
                { id: 3,city: 'Астана', price: 1300 },
                { id: 4,city: 'Караганда', price: 1400 },
                { id: 5,city: 'Актау', price: 15000 }],
            status: 'active',
            onePrice: true,
        },
        {
            id: 2,
            image: [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQhyxeuTU7zR1L3BwWbAjEIJPNgN_UDu5Ug&usqp=CAU',
            ],
            name: 'Iphone 11',
            description: 'This is Iphone',
            prices: [ {id: 0, city: "", price: 0},
                { id: 1, city: 'Алматы', price: 1100 },
                { id: 2,city: 'Актобе', price: 1200 },
                { id: 3,city: 'Астана', price: 1300 },
                { id: 4,city: 'Караганда', price: 1400 },
                { id: 5,city: 'Актау', price: 15000 }],
            status: 'inactive',
            onePrice: false,
        },
        {
            id: 3,
            image: [
               'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQhyxeuTU7zR1L3BwWbAjEIJPNgN_UDu5Ug&usqp=CAU',
            ],
            name: 'Iphone 12',
            description: 'This is Iphone',
            prices: [ {id: 0, city: "", price: 2000},
                { id: 1, city: 'Алматы', price: 1100 },
                { id: 2,city: 'Актобе', price: 1200 },
                { id: 3,city: 'Астана', price: 1300 },
                { id: 4,city: 'Караганда', price: 1400 },
                { id: 5,city: 'Актау', price: 15000 }],
            status: 'active',
            onePrice: true,
        },
        {
            id: 5,
            image: [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQhyxeuTU7zR1L3BwWbAjEIJPNgN_UDu5Ug&usqp=CAU',
            ],
            name: 'Iphone 13',
            description: 'This is Iphone',
            prices: [ {id: 0, city: "", price: 4000},
                { id: 1, city: 'Алматы', price: 1100 },
                { id: 2,city: 'Актобе', price: 1200 },
                { id: 3,city: 'Астана', price: 1300 },
                { id: 4,city: 'Караганда', price: 1400 },
                { id: 5,city: 'Актау', price: 15000 }],
            status: 'inactive',
            onePrice: true,
        },
        {
            id: 6,
            image: [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQhyxeuTU7zR1L3BwWbAjEIJPNgN_UDu5Ug&usqp=CAU' ,
            ],
            name: 'Iphone 14',
            description: 'This is Iphone',
            prices: [ {id: 0, city: "", price: 0},
                { id: 1, city: 'Алматы', price: 1100 },
                { id: 2,city: 'Актобе', price: 1200 },
                { id: 3,city: 'Астана', price: 1300 },
                { id: 4,city: 'Караганда', price: 1400 },
                { id: 5,city: 'Актау', price: 15000 }],
            status: 'inactive',
            onePrice: false,
        },
        {
            id: 0,
            image: [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQhyxeuTU7zR1L3BwWbAjEIJPNgN_UDu5Ug&usqp=CAU',
            ],
            name: 'Iphone 15',
            description: 'This is Iphone',
            prices: [ {id: 0, city: "", price: 0},
            { id: 1, city: 'Алматы', price: 1100 },
            { id: 2,city: 'Актобе', price: 1200 },
            { id: 3,city: 'Астана', price: 1300 },
            { id: 4,city: 'Караганда', price: 1400 },
            { id: 5,city: 'Актау', price: 15000 }],
            status: 'active',
            onePrice: false,
        },
    ],
    page: 1
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [nextPage.fulfilled.type]: (state, action) => {
            state.page = state.page + 1
        },
        [previousPage.fulfilled.type]: (state, action) => {
            state.page = state.page - 1
        },
        [deleteProduct.fulfilled.type]: (state, action) => {
            state.products = state.products.filter(el => el.id !== action.payload)
        },
        [addProduct.fulfilled.type]: (state, action) => {
            state.products.push(action.payload)
        },
        [productChange.fulfilled.type]: (state, action) =>{
            const {description, id, image, name, prices, status, onePrice} = action.payload
            state.products = state.products.map((el) => (
                el.id === id
                ? {...el, name, description, image, prices, status, onePrice}
                : el
            ))
        }
    }
})


export default productsSlice.reducer;