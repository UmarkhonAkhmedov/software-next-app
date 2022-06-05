import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='Hero'>
      <div className='container'>
        <div className='hero'>
          <h1>The Best Software to Grow your Sales and Services</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
          <form>
            <input type="email" placeholder='Enter Your Email' />
            <button type='submit' className="btn__dark">Get Free trial</button>
          </form>
          <div className='hero__blur'>
              
          </div>
          <div className='hero__dashboard'>
            <Image width={900} height={550} src="/Img/Home/dashboard__img.png" objectFit='contain' alt="" />
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Hero