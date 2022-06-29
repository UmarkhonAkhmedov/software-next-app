import Image from 'next/image'
import React from 'react'
import { proudImg } from '../DummyData'
import Heading from '../Heading'

function Proud() {
  return (
    <div className='proud'>
      <div className='container'>
        <div className='proud__heading'>
          <h2>We are proud of our products</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        </div>
        <div className='proud__img'>
          {proudImg.map((item, id) => (
            <div key={id} className='proud__img--item'>
              <Image src={`/Img/About/proud__${item}.svg`} alt="" width={315} height={278} />
            </div>
          ))}
        </div>
        <div className='proud__about'>
            <Heading position='center' title='About Us' heading='We’re a team of data analysts' />
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
        </div>
      </div>
    </div>
  )
}

export default Proud