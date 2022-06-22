import Image from 'next/image'
import React from 'react'

function Generation() {
  return (
    <div className='marketing'>
      <div className='marketing__info'>
        <h4 className='title__small--blur'>Lead Generation</h4>
        <h2>More leads that convert</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
      </div>
      <div className='marketing__img'>
        <Image src="/Img/Product/lead__main--img.svg" width={576} height={434} objectFit="contain" alt="" />
      </div>
    </div>
  )
}

export default Generation