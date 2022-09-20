import React from 'react'

const ProductHeader = () => {
    return (
        <div className='flex justify-between mt-5 align-center'>
            <div className="flex items-center">
                <input id="link-checkbox" type="checkbox" value="" disabled={true} className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div className='w-20'>
            </div>
            <div>
                Название
            </div>
            <div>
                Статуc
            </div>
            <div>
                Цена
            </div>
        </div>
    )
}

export default ProductHeader