import React from 'react'
import Brands from '../components/Brands'
import Features from '../components/Features'
import Generation from '../components/Product/Generation'
import Marketing from '../components/Product/Marketing'
import ProductHero from '../components/Product/ProductHero'
import Service from '../components/Product/Service'
import Tracker from '../components/Product/Tracker'

function Product() {
  return (
    <div>
      <div className='product__hero--background'>
        <ProductHero />
        <Brands />
      </div>
      <Service />
      <Features />
      <div className="product__info">
        <div className='container'>
          <Marketing />
          <Tracker />
          <Generation />
        </div>
      </div>
    </div>
  )
}

export default Product