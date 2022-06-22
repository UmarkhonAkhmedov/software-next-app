import Image from 'next/image'
import React from 'react'

function Tracker() {
  return (
    <div className='marketing tracking'>
      <div className='marketing__img'>
        <Image src="/Img/Product/tracking__main-img.svg" width={576} height={434} objectFit="contain" alt="" />
      </div>
      <div className='marketing__info'>
        <h4 className='title__small--blur'>Time tracker</h4>
        <h2>Track your project performance</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
      </div>
    </div>
  )
}

export default Tracker