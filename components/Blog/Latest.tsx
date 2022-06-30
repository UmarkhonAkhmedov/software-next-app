import Image from 'next/image'
import React from 'react'
import Heading from '../Heading'

function Latest() {
  return (
    <div className='Latest'>
      <div className='container'>
        <div className='latest'>
          <div className='latest__heading'>
            <h2>Read our latest blogs</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>
          </div>
          <div className='latest__post'>
            <div className='latest__post--info'>
              <Heading heading='New invoicing features to help you get paid faster' title='Trending Post' position='left' />
              <p>Over the past few months, we’ve added several new features to SaaS Invoicing to help any business get paid faster and streamline their collection workflows.</p>
              <span>Luke Matthews l  November 8, 2021</span>
            </div>
            <div className='latest__post--img'>
              <Image src="/Img/Blog/blog--post__main--img.png" width={500} height={300} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Latest