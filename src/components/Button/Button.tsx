import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
    path?: string
    name: string
    handleClick?: () => void
}

const Button: FC<ButtonProps> = ({ path, name, handleClick }) => {
    return (
        <div>
            {path !== undefined ? 
                <Link to={`${path}`}>
                    <div onClick={handleClick} className='focus:outline-none w-24 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800' >{name}</div>
                </Link > 
                : 
                <button onClick={handleClick} className='focus:outline-none w-24 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800' >{name}</button>
            }
        </div>
    )
}

export default Button