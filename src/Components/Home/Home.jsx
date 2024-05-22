import React, { useEffect } from 'react'
import useApiStore from '../../Context/index'
import Cart from '../Cart/Cart'

const Home = () => {
  const { productData, loading, error, fetchProductData } = useApiStore()

  useEffect(() => {
    fetchProductData()
  }, [fetchProductData])

  return (
<>

       <Cart productData={productData}/>





</>
  )
}

export default Home
