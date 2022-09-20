import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useTotalCounts } from '../../hooks/useTotalCounts'

const Header: FC = () => {
    const { totalCount } = useTotalCounts()
    return (
        <div className='flex justify-between'>
            <div className='font-medium text-xl'>
                Товары - {totalCount}
            </div>
            <Link to="/create">
                <div className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800' >Добавить</div>
            </Link >
        </div>
    )
}

export default Header