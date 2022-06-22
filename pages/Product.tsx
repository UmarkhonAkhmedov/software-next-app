import React from 'react'
import Brands from '../components/Brands'
import Features from '../components/Features'
import ProductHero from '../components/Product/ProductHero'
import Service from '../components/Product/Service'

function Product() {
  return (
    <div>
      <div className='product__hero--background'>
        <ProductHero />
        <Brands />
      </div>
      <Service />
      <Features />
    </div>
  )
}

export default Product