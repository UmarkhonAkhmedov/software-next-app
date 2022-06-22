import Image from 'next/image'
import React from 'react'

function Marketing() {
  return (
    <div className='marketing'>
      <div className='marketing__info'>
        <h4 className='title__small--blur'>Marketing insights</h4>
        <h2>Data-driven client feedback</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
      </div>
      <div className='marketing__img'>
        <Image src="/Img/Product/marketing__main--img.svg" width={466} height={448} objectFit="contain" alt="" />
      </div>
    </div>
  )
}

export default Marketing