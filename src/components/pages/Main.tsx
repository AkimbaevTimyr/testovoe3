import React, { useState } from 'react'
import Header from '../Header/Header'
import Input from '../Input/Input'
import Pagination from '../Pagination/Pagination'
import Product from '../Product/Product'

const Main = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  return (
    <div>
      <Header />
      <Input setSearchValue={(value: string) => setSearchValue(value)} />
      <Product searchValue={searchValue} />
      <Pagination />
    </div>
  )
}

export default Main