import React, {FC} from 'react'

interface ProductNameProps {
    name: string ;
    setName: (name: string) => void;
}

const ProductName: FC<ProductNameProps> = ({name, setName, }) => {
    return (
        <div>
            <div className='font-normal text-xl'>Название Товара</div>
            <input  value={name} onChange={(e) => setName(e.target.value)}  type="search" id="search" className=" block mt-2 p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Название товара" required />
        </div>
    )
}

export default ProductName