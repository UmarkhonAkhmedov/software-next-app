import React from 'react'
import Brands from '../components/Brands'
import ProductHero from '../components/Product/ProductHero'

function Product() {
  return (
    <div>
      <div className='product__hero--background'>
        <ProductHero />
        <Brands />
      </div>
    </div>
  )
}

export default Product