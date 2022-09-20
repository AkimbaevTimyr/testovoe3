import React, { FC, useState } from 'react'
import { useCities } from '../../../../hooks/useCities'
import { PriceType } from '../../../../types/products';
import CityFiled from './CityFiled'

interface InputProps {
  setPrice: (city: string, price: number ) => void;
  setCheckBox: () => void;
  checkBox: boolean;
  prices: PriceType[]
}

const Price: FC<InputProps> = ({ setPrice, prices, setCheckBox, checkBox}) => {
  const { cities } = useCities()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>,  city: string) => {
    setPrice(city, Number(e.target.value))
  }
  return (
    <div className="mt-10">
      <div className='font-normal text-xl'>
        Цена
      </div>
      <div className='flex items-center mb-5'>
        <input onChange={() => setCheckBox()} checked={checkBox} id="link-checkbox" type="checkbox" value="" className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <p>Одна цена для всех городов</p>
        <input value={prices[0]?.price === 0 ? "" : prices[0]?.price} disabled={!checkBox} onChange={(e)=> handleChange(e, '')} type="number" className="ml-5" placeholder='Укажите цену' />
      </div>
      <div className='mb-5'>
        {
          checkBox === false ? <div>
            <div className='flex justify-between w-44'>
              <label>Город</label>
              <label className='mr-3'>Цена</label>
            </div>
            {cities.map((el, index) => (
              <CityFiled handleChange={handleChange} key={el.id} price={prices[el.id]?.price} name={el.name}  />
            ))}
          </div> : ''
        }
      </div>
    </div>
  )
}

export default Price