import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../helpers/redux'
import { nextPage, previousPage } from '../../store/actions/ProductsActionCreator'

const Pagination = () => {
    const dispatch = useAppDispatch()
    const [count, setCount] = useState<number>(1)
    const {page, products} = useAppSelector(state=> state.products)
    const maxPage = Math.ceil(products.length / 5)
    
    const next = () =>{
        dispatch(nextPage())
        setCount(count + 1)
    }
    const previous = () =>{
        dispatch(previousPage())
        setCount(count - 1)
    }
    return (
        <div className='flex justify-center mt-5'>
            <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px items-center">
                    <li onClick={()=> previous()}>
                        <button disabled={page === 1 ? true : false} className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
                    </li>
                    <li>
                        <p className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{count}</p>
                    </li>
                    <li onClick={()=> next()}>
                        <button disabled={page === maxPage ? true : false} className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination