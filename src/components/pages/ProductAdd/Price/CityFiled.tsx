import React, {FC} from 'react'

interface CityFiledProps {
    name: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>, city: string) => void;
    price: number
}

const CityFiled: FC<CityFiledProps> = ({name, handleChange, price}) => {
    return (
        <div className='flex '>
            <div className='w-32'>{name}</div>
            <input value={price === 0? "" : price} onChange={(e) => handleChange(e, name)} type="number" placeholder='Цена' />
        </div>
    )
}

export default CityFiled