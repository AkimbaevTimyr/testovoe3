import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../../helpers/redux'
import { useProductById } from '../../../hooks/useProductById'
import { productChange } from '../../../store/actions/ProductsActionCreator'
import ProductChange from '../../ProductChange/ProductChange'

const ProductPage = () => {
  let { id } = useParams()
  const { products } = useAppSelector(state => state.products)
  const { name, image, description, price, status, onePrice } = useProductById(Number(id), products)
  const obj = { name, images: image, description, price, status, onePrice }
  return (
    <div>
      <ProductChange id={Number(id)} obj={obj} callback={(product) => productChange(product)} buttonName="Сохранить" />
    </div>
  )
}

export default ProductPage