import React, {FC} from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../helpers/redux'
import { useHighestPrice } from '../../hooks/useHighestPrice'
import { deleteProduct } from '../../store/actions/ProductsActionCreator'
import { ProductType } from '../../types/products'

const ProductItem: FC<ProductType> = ({id, image, name, description, prices, status, onePrice}) => {
    const { price} = useHighestPrice(prices)
    const dispatch = useAppDispatch()
    const bckg = status === "inactive" ? 'bg-red-400' : 'bg-green-400'
    const handleDelete = () =>{
        dispatch(deleteProduct(id))
    }
    return (
        <div className='flex justify-between mt-5 text-center'>
            <div className="flex items-center">
                <input  onClick={()=> handleDelete()} id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div >
                <Link to={`/edit/${id}`}>
                    <img src={image[0]} className='h-24'/>
                </Link>
            </div>
            <div className='w-20'>
                {name}
            </div>
            <div className='w-14  '>
                <p className={`${bckg} rounded-xl`}>
                    {status}
                </p>
            </div>
            <div>
                {onePrice === true ? prices[0].price : price}
            </div>
        </div>
    )
}

export default ProductItem