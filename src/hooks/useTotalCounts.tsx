import React from "react"
import { useAppSelector } from "../helpers/redux"
export const useTotalCounts = () =>{
    const {products} = useAppSelector(state => state.products)
    let totalCount = products.reduce((sum: number, item: any) => sum + 1, 0)
    return {
        totalCount
    }
}