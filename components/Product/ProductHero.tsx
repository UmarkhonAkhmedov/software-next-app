import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProductHero() {
  return (
    <div className='ProHero'>
      <div className='container'>
        <div className='proHero'>
          <div className='proHero__heading'>
            <h1>Grow your Sales and Services</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='proHero__heading--buttons'>
              <button className="btn__dark">
                <Link href="/" passHref>Get Started</Link>
              </button>
              <button className="btn__dark">
                <Link href="/" passHref>Get Started</Link>
              </button>
            </div>
          </div>
          <div className='proHero__img'>
            <Image src="/Img/Product/hero__dashboard.png" width={550} height={360} priority objectFit='contain' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductHero