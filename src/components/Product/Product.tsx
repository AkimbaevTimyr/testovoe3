import React, { FC } from 'react'
import { useAppSelector } from '../../helpers/redux'
import { usePagination } from '../../hooks/usePagination'
import {  ProductType } from '../../types/products'
import ProductHeader from './ProductHeader'
import ProductItem from './ProductItem'

interface ProductProps {
    searchValue: string;
}

const Product: FC<ProductProps> = ({searchValue}) => {
    const {products, page} = useAppSelector(state => state.products)
    const data = products.filter((el: ProductType) => el.name?.toLowerCase().includes(searchValue))
    const {firstIndex, lastIndex} = usePagination(page)
    return (
        <div>
            <ProductHeader/>
            {data.slice(firstIndex, lastIndex).map((el: ProductType) =>(
                <ProductItem key={el.id} id={el.id} image={el.image} description={el.description} prices={el.prices} name={el.name} status={el.status} onePrice={el.onePrice} />
            ))}
        </div>
    )
}

export default Product