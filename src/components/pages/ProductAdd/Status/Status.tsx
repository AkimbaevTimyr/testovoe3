import React, { FC } from 'react'

interface StatusProps {
    setStatus: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    status: string;
}

const Status: FC<StatusProps> = ({setStatus, status}) => {
    const options = [
        {id: 'active', name: "active"},
        {id: "inactive", name:  "inactive"},
    ]
    return (
        <div className='mt-10 w-60'>
            <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400">Статус товара</label>
            <select onChange={setStatus} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {options.map((e) => (
                    <option selected={e.id === status}>{e.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Status