import React, { useState, FC } from 'react'
import 'react-quill/dist/quill.snow.css';
import { useRandomId } from '../../../hooks/useRandomId';
import { addProduct } from '../../../store/actions/ProductsActionCreator';
import ProductChange from '../../ProductChange/ProductChange';


const ProductAdd: FC = () => {
    const { id } = useRandomId()
    return (
        <div>
            <ProductChange id={id} callback={(product) => addProduct(product)} buttonName='Добавить'/>
        </div>
    )
}

export default ProductAdd