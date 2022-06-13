import Image from 'next/image'
import React from 'react'
import Heading from '../Heading'

function Reason() {
  return (
    <div className='container'>
      <div className='reason'>
        <div className='reason__heading'>
          <Heading heading="To upscale your business to the next level" title="Why should you work with us?" position="" />
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.</p>
        </div>
        <div className='reason__info'>
          <ReasonInfo />
          <ReasonInfo />
          <ReasonInfo />
        </div>
      </div>
    </div>
  )
}

function ReasonInfo(){
  return (
    <div className='reason__info--list'>
      <div className='reason__info--list__img'>
        <Image src="/Img/Home/reason__arrow.svg" alt="" width={20} height={17} />
      </div>
      <p className='reason__info--list__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
  )
}

export default Reason