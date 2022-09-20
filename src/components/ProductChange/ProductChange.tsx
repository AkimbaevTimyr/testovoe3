import React, { FC, useState } from 'react'
import Button from '../Button/Button'
import FileUploader from '../pages/ProductAdd/FileUploader/FileUploader'
import Price from '../pages/ProductAdd/Price/Price'
import ProductName from '../pages/ProductAdd/ProductName/ProductName'
import Status from '../pages/ProductAdd/Status/Status'
import Description from '../pages/ProductAdd/Description/Description'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../helpers/redux'
import { PriceType, ProductType } from '../../types/products'
import { useInput } from '../../hooks/validation/useInput'
import { useCities } from '../../hooks/useCities'

type obj = {
    description: string;
    status: string;
    price: PriceType[];
    name: string
    images: [];
    onePrice: boolean;
}

interface ProductChangeProps {
    id: number;
    obj?: obj;
    callback: (product: ProductType) => any;
    buttonName: string;
}


const ProductChange: FC<ProductChangeProps> = ({ id, obj, callback, buttonName }) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { pricesTable } = useCities()
    const [description, setDescription] = useState<string>(obj?.description || '')
    const [status, setStatus] = useState<string>(obj?.status || 'active')
    const [prices, setPrices] = useState<PriceType[]>(obj?.price || pricesTable)
    const [name, setName] = useState<string>(obj?.name || '')
    const [images, setImages] = useState<any>(obj?.images || [])
    const [checkBox, setCheckBox] = useState<boolean>(obj?.onePrice || false)
    const { error } = useInput([description, status, prices, name, images])
    const handleClick = () => {
        if (error) {
            alert('Одно или несколько поль не заполнены')
        } else {
            const product = {
                id,
                image: images,
                name,
                description,
                prices: prices,
                status,
                onePrice: checkBox
            }
            navigate('/')
            dispatch(callback(product))
        }
    }
    const handleDelete = (image: string) => {
        const imgs = images.filter((el: string) => el !== image)
        setImages(imgs)
    }
    const changePrices = (city: string, price: number) => {
        setPrices(prices.map((el: PriceType) => el.city === city ? { ...el, price } : el))
    }
    return (
        <div className='flex justify-between items-center'>
            <div className='w-5/12'>
                <Button path='/' name='Назад' />
                <ProductName name={name} setName={(name) => setName(name)} />
                <Status setStatus={(e) => setStatus(e.target.value)} status={status} />
                <div>
                    <Description description={description} setDescription={setDescription} />
                    <div className='mt-5'>
                        <div className='font-normal text-xl'>
                            Медиа
                        </div>
                        <label>Choose images to upload (PNG, JPG)</label>
                        <FileUploader images={images} setImages={(obj: any) => setImages([...images, ...obj])} handleDelete={(image) => handleDelete(image)} />
                    </div>
                    <Price setPrice={(city, price) => changePrices(city, price)} prices={prices} checkBox={checkBox} setCheckBox={() => setCheckBox(!checkBox)} />
                    <div className='flex'>
                        <Button name={buttonName} handleClick={handleClick} />
                        <Button path='/' name='Отмена' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductChange