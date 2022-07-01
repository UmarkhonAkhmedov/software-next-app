import Image from 'next/image'
import React from 'react'
import { discoverData } from '../DummyData'
import Heading from '../Heading'

function Discover() {
  return (
    <div className='container'>
      <div className="discover">
        <div className='discover__heading'>
          <Heading heading="Analyze your sales and marketing leads" title="Discover More" position='left' />
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.</p>
        </div>
        <div className='discover__info'>
          {discoverData.map((item) => (
            <div key={item.id} className="discover__info--item">
              <div className='discover__info--item__img'>
                <Image src={`/Img/Home/discover__${item.img}.svg`} width={30} height={30} objectFit="contain" />
              </div>
              <div className='discover__info--item__text'>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Discover